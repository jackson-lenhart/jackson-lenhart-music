'use strict'

let shows = () => {
  let showData = require('../data/show')

  return '<h2>Shows</h2>' +
  '<div id="shows">' +
  (showData.length === 0 ?
    '<p>No upcoming shows</p>' :
    showData.map(s => s)
    .join('')) +
  '</div>'
}

module.exports = shows
