const fetch = require('node-fetch')
const config = require('../config')
const HEALTHY = 'Ok'
const WARN = i => `Warning: ${i}`
const ERROR = i => `Error: ${i}`

class Checks {
  constructor(region) {
    this.region = region
    this.endpoint = `${config.endpoint}/a/${region}`
  }

  async runAll() {
    console.log('Runnning all checks in', this.region)
    const status = {}
    status.healthcheck = await this.healthcheck()
    status.lines = await this.lines()

    status.timetable = {}
    for (let i in config[this.region].modes) {
      const mode = config[this.region].modes[i]
      status.timetable[mode] = await this.offlineTimetable(mode)
    }
    return status
  }

  async healthcheck() {
    const url = `${this.endpoint}/info`
    console.log('Fetching', url)
    const response = await fetch(url)
    return response.status === 200 ? HEALTHY : ERROR(response.status)
  }

  async lines() {
    const url = `${this.endpoint}/lines`
    console.log('Fetching', url)
    const response = await fetch(url)
    let json
    try {
      json = await response.json()
    } catch (err) {
      return ERROR(`${response.status} - Invalid JSON`)
    }
    return Object.keys(json.lines).length > 0 && json.groups.length > 0
      ? HEALTHY
      : ERROR('0 lines found.')
  }

  async offlineTimetable(mode) {
    let failures = 0
    const checks = config[this.region][`${mode}Timetable`]
    for (let i in checks) {
      const { line, stop } = checks[i]
      const url = `${this.endpoint}/station/${stop}/timetable/${line}/2`
      console.log('Fetching', url)

      let found = false
      // if it's like a public holiday, and there's no trains operating for the next 3 days
      // it goes 4 days into the future
      for (let offset = 0; offset < 4; offset++) {
        const response = await fetch(`${url}/${offset}`)
        try {
          const json = await response.json()

          if (json.length > 0) {
            console.log('Found', json.length, 'services')
            found = true
            break
          }
        } catch (err) {
          console.log(err)
          break
        }
      }
      if (found === false) {
        console.log('Found 0 services')
        failures += 1
      }
    }
    if (failures === 0) {
      return HEALTHY
    } else if (failures === checks.length) {
      return ERROR(`All ${checks.length} checks failed.`)
    } else {
      return WARN(`${failures}/${checks.length} checks failed.`)
    }
  }
}
module.exports = Checks
