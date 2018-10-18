const config = require('../config/index.js')
const Checks = require('./checks.js')
const HTMLRenderer = require('./htmlRenderer.js')
const Upload = require('./upload.js')

exports.myHandler = function(event, context, callback) {
  const checks = new Checks(event.region)
  checks.runAll().then(data => {
    const upload = new Upload()
    const promises = [
      upload.upload(
        config.bucket,
        `status/${event.region}.json`,
        JSON.stringify(data),
        'application/json'
      ),
      upload.upload(
        config.bucket,
        `status/${event.region}.html`,
        HTMLRenderer.makePage(event.region, HTMLRenderer.render(data)),
        'text/html'
      ),
    ]
    Promise.all(promises).then(() => {
      callback(null, 'Success')
    })
  })
}
