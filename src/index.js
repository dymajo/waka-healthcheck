const Checks = require('./checks.js')
const HTMLRenderer = require('./htmlRenderer.js')

exports.myHandler = function(event, context, callback) {
  const checks = new Checks(event.region)
  checks.runAll().then(data => {
    console.log(data)
    console.log(HTMLRenderer.makePage(event.region, HTMLRenderer.render(data)))
    callback(null, 'some success message')
  })
}
