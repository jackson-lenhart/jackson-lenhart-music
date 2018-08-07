'use strict'

let path = require('path')

let readfile = require('../utils/readfile')

let absolutePath = p =>
  path.join(__dirname, p)

let filePaths = [
  '../static/index.html',
  '../static/style.css',
  '../static/script.js'
]

let getStaticFiles = () =>
  Promise.all(
    filePaths.map(p =>
      readfile(absolutePath(p))
    )
  )

module.exports = getStaticFiles
