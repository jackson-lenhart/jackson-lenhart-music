'use strict'

let fs = require('fs')

let readfile = path =>
  new Promise((resolve, reject) =>
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  )

module.exports = readfile
