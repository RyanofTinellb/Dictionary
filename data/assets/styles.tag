default:
  props:
    font: Cambria
    size: 18
abbr:
  props:
    font: Felix Titling
    size: 80
also:
  type: div
gloss:
  props:
    italics: true
  type: span
  key: i
translation:
  type: div
table:
  type: table
block:
  type: div
folding:
  type: block
  open: <details class="folding">
  close: </details>
folded:
  type: line
  open: <summary class="folding">
  close: </summary>
transliteration:
  type: span
  language: true
tinellbian:
  props:
    font: tinellbian
    size: 150
    underline: true
  type: span
  language: true
  key: Alt-t
thead:
  type: block
tbody:
  type: block
overbar:
  type: span
sup: {}
sub: {}
universe:
  type: span
note:
  type: div
symbol:
  type: span
ol:
  type: block
  start: <li>
  end: </li>
h2:
  props:
    font: Artisan Paris
    size: 120
    bold: true
    justification: centre
  key: KeyPress-1
  type: heading
poslink:
  props:
    underline: true
  type: span
  language: true
  open: <a href="
  pipe: '">'
  close: </a>
  param: $lookup:poslink$|$text$
  rank: -50
glossary:
  type: span
  open: <dfn><abbr class="glossary" title="
  pipe: '">'
  close: </abbr></dfn>
  param: $lookup:glossary$|$text$
mobile-table:
  type: div
  open: <ul class="mobile">
  close: </ul>
  start: <li>
  end: </li>
mobile:
  props:
    colour: "#ffff00"
  type: span
desktop:
  props:
    colour: "#ff00ff"
  type: span
hidden:
  props:
    colour: "#999999"
  type: span
  key: h
h3:
  props:
    font: Garamond
    underline: true
    top: 15
    bottom: 7
  type: heading
  key: KeyPress-2
h4:
  props:
    font: Harrington
    bold: true
    underline: true
    top: 15
    bottom: 15
    left: 50
  type: heading
ipa:
  props:
    font: Lucida Sans Unicode
  type: span
  open: <a href="
  pipe: '"><span class="ipa">'
  close: '</span></a>'
  param: $lookup:ipa$|$text$
  rank: -50
  language: true
link:
  props:
    underline: true
    colour: "#0080ff"
  open: <a href="
  pipe: '">'
  close: </a>
  param: $text$.html|$text$
  key: N
  rank: -50
  language: true
a:
  open: <a href="
  pipe: '">'
  close: </a>
  rank: -50
strong:
  props:
    bold: true
native-script:
  props:
    justification: centre
  type: div
pronunciation:
  type: div
introduction:
  type: div
javascript:
  type: div
definition:
  props:
    left: 30
  type: div
wordlist:
  type: div
type:
  type: div
