const index = require('./src/index.js')
index.myHandler({ region: 'nz-akl' }, {}, () => {
  index.myHandler({ region: 'nz-wlg' }, {}, () => {})
})

