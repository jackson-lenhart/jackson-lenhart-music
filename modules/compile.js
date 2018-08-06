'use strict'

let htmlifyShows = require('./htmlify-shows')

let compile = (layout, style, script, shows) =>
    layout.replace(
      '<div id="shows"></div>',
      htmlifyShows(shows)
    )
    .replace(
      '<style></style>',
      '<style>' + style + '</style>'
    )
    .replace(
      '<script></script>',
      '<script>' + script + '</script>'
    )

module.exports = compile
