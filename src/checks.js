const fetch = require('node-fetch')
const config = require('./config')
const HEALTHY = 'Ok'
const ERROR = i => `Error ${i}`

class Checks {
  constructor(region) {
    this.region = region
  }
  async runAll() {
    console.log('Runnning all checks in', this.region)
    const status = {}
    status.healthcheck = await this.healthcheck()
    status.lines = await this.lines()
    return status
  }
  async healthcheck() {
    const url = `${config.endpoint}/a/${this.region}/info`
    const response = await fetch(url)
    return response.status === 200 ? HEALTHY : ERROR(response.status)
  }
  async lines() {
    const url = `${config.endpoint}/a/${this.region}/lines`
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
}
module.exports = Checks
