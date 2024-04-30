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
table:
  type: table
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
link:
  props:
    underline: true
    colour: "#0080ff"
  open: <a href="
  pipe: '">'
  close: </a>
  param: $name$.html|$name$
  key: N
  rank: -50
  language: true
a:
  open: <a href="
  pipe: '">'
  close: </a>
  rank: -50
native-script:
  props:
    justification: centre
  type: div
pronunciation:
  type: span
definition:
  props:
    left: 30
  type: div
wordlist:
  type: div
type:
  type: div
