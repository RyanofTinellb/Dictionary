default:
  props:
    font: Cambria
    size: 18
abbr:
  props:
    font: Felix Titling
    size: 80
also:
  tags:
    type: div
gloss:
  tags:
    type: span
    key: i
  props:
    italics: true
tinellbian:
  tags:
    type: span
    language: true
    key: Alt-t
  props:
    font: tinellbian
    size: 150
    underline: true
h1:
  tags:
    key: KeyPress-1
    type: heading
  props:
    font: Artisan Paris
    size: 120
    bold: true
    justification: centre
poslink:
  tags:
    type: span
  props:
    underline: true
mobile:
  tags:
    type: span
  props:
    colour: '#ffff00'
desktop:
  tags:
    type: span
  props:
    colour: '#ff00ff'
hidden:
  tags:
    type: span
    key: h
  props:
    colour: "#999999"
h2:
  tags:
    type: heading
    key: KeyPress-2
  props:
    font: Garamond
    underline: true
    top: 15
    bottom: 7
h3:
  tags:
    type: heading
  props:
    font: Harrington
    bold: true
    underline: true
    top: 15
    bottom: 15
    left: 50
ipa:
  tags:
    type: span
  props:
    font: Lucida Sans Unicode
link:
  tags:
    type: data
    key: N
    language: true
  props:
    underline: true
    colour: "#0080ff"
a:
  tags:
    open: <a href="
    pipe: '">'
    close: </a>
    rank: -50
native-script:
  tags:
    type: div
  props:
    justification: centre
pronunciation:
  tags:
    type: span
definition:
  tags:
    type: div
  props:
    left: 30
wordlist:
  tags:
    type: div
type:
  tags:
    type: div
