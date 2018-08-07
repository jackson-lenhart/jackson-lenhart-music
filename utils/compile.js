'use strict'

let compile = (layout, style, script) =>
    layout.replace(
      '<style></style>',
      '<style>' + style + '</style>'
    )
    .replace(
      '<script></script>',
      '<script>' + script + '</script>'
    )

module.exports = compile
