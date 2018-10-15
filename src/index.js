const Checks = require('./checks.js')

exports.myHandler = function(event, context, callback) {
  const checks = new Checks(event.region)
  checks.runAll().then(data => {
    console.log(data)
    callback(null, 'some success message')
  })
}
