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
  key: Alt-g
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
b:
  props:
    bold: true
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
  type: heading
  props:
    font: Artisan Paris
    size: 120
    bold: true
    justification: centre
language-name:
  props:
    font: Artisan Paris
    size: 120
    bold: true
    justification: centre
  key: KeyPress-1
  type: heading
  open: '<h2 class="language" '
  pipe: '>'
  param: id="$url(text)$"|$text$
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
  rank: -50
mobile-table:
  type: div
  open: <div class="mobile">
ul:
  type: block
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
part-of-speech:
  props:
    font: Garamond
    underline: true
    top: 15
    bottom: 7
  key: KeyPress-2
  type: heading
  open: <h3 class="part-of-speech">
  close: </h3>
subheading:
  props:
    font: Harrington
    bold: true
    underline: true
    top: 15
    bottom: 15
    left: 50
  type: heading
  open: <h4>
  close: </h4>
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
  param: $text$.html#$url(lookup:lang)$|$text$
  key: l
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
  props:
    justification: centre
    top: 10
    bottom: 25
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
