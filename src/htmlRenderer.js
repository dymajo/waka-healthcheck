const config = require('../config')

class HTMLRender {
  static render(json, level = 2) {
    let output = []
    Object.keys(json).forEach(key => {
      let value = json[key]
      if (json[key].constructor === Date) {
        value = `<time>${json[key]}</time>`
      } else if (typeof json[key] === 'object') {
        value = HTMLRender.render(json[key], level + 1)
      }
      const str = `<h${level}>
        <span class="key">${key}</span>:
        <span class="value">${value}</span>
      </h${level}>`
      output.push(str)
    })
    return output.join('\n')
  }

  static getCSS() {
    return `<style>
h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
  font-family: sans-serif;
  margin: 0.5em
}
.key {
  font-weight: bold;
}
h3, h4, h5, h6 {
  font-size: 90%;
}
</style>`
  }

  static makePage(prefix, html) {
    return `
      <div>
        <h1>${[prefix, config[prefix].name].join(' - ')}</h1>
        ${HTMLRender.getCSS()}
        ${html}
      </div>
    `
  }
}
module.exports = HTMLRender
