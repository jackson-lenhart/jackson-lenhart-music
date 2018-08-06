'use strict'

let path = require('path')
let express = require('express')

let getStaticFiles = require('./modules/get-static-files')
let compile = require('./modules/compile')

let app = express()

getStaticFiles()
  .then(result => {
    let [layout, style, script] = result

    app.get('/*', (req, res) => {
      let shows = require('./data/shows')

      let page = compile(layout, style, script, shows)

      res.send(page)
    })
  })
  .catch(err =>
    console.error(err)
  )

app.listen(process.env.PORT || 3000,
  () => console.log('Listening...'))
