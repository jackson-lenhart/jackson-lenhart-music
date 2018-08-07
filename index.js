'use strict'

let path = require('path')
let express = require('express')

let getStaticFiles = require('./utils/get-static-files')
let compile = require('./utils/compile')

let home = require('./routes/home')
let shows = require('./routes/shows')

let app = express()

getStaticFiles()
  .then(result => {
    let [layout, style, script] = result
    let page = compile(layout, style, script)

    app.get('/', (req, res) => {
      let homePage = page.replace(
        '<div id="ph-home"></div>',
        home()
      )

      res.send(homePage)
    })

    app.get('/shows', (req, res) => {
      let showPage = page.replace(
        '<div id="ph-shows"></div>',
        shows()
      )

      res.send(showPage)
    })
  })
  .catch(err =>
    console.error(err)
  )

app.listen(process.env.PORT || 4444,
  () => console.log('Listening...'))
