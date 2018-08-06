'use strict'

let htmlifyShows = shows =>
  '<div id="shows">' +
  (shows.length === 0 ?
    '<p>No upcoming shows</p>' :
    shows.map(s => s)
    .join('')) +
  '</div>'

module.exports = htmlifyShows
