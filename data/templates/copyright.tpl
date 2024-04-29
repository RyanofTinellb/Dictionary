styles:
  copyright:
    tags:
      type: div
      start: <span class="no-breaks">
      end: </span>
  a:
    tags:
      open: '<a href="'
      pipe: '">'
  date:
    tags:
      type: data
  br:
    tags:
      type: complete
  param:
    tags:
      type: data
text:
  - <copyright>&copy;2017-<param>year</param> <a>http://www.tinellb.com/about.html|Ryan Eakins</a>.
  - "Last updated: <date>date|dddd, mmmm dr, yyyy</date></copyright>"