default:
  props:
    font: Cambria
    size: 18
    ime: autocorrect
also:
  type: div
  param: '<i>See also:</i> <a href="$url(text)$.html">$text$</a>'
  props:
    size: 150
    colour: '#33cc33'
    left: 15
    italics: true
    bold: true
    underline: true
block:
  type: div
folded:
  type: line
  open: <summary class="folding">
  close: </summary>
folding:
  type: block
  open: <details class="folding">
  close: </details>
gloss:
  props:
    italics: true
    off-key: Return
  type: span
  key: Alt-g
table:
  type: table
translation:
  type: div
transliteration:
  type: span
  language: true
  props:
    ime: transliteration
    off-key: space
tinellbian:
  props:
    font: Tinellbian
    size: 150
    underline: true
    ime: tinellbian
    off-key: space
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
    size: 90
universe:
  type: span
note:
  type: span
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
    off-key: Return
  key: KeyPress-1
  type: heading
  open: '<h2 class="language" '
  pipe: '>'
  close: </h2>
  param: id="$url(text)$"|$text$
poslink:
  props:
    underline: true
    off-key: space
  type: span
  language: true
  open: <a href="
  pipe: '">'
  close: </a>
  param: $lookup:poslink$|$text$
  key: Alt-p
  rank: -50
story-link:
  props:
    underline: true
    colour: '#ff00ff'
  open: <a href="
  pipe: '">'
  close: </a>
  param: $lookup:external$|$text$
glossary:
  props:
    font: Felix Titling
    size: 80
  type: span
  open: <dfn><abbr class="glossary" title="
  pipe: '">'
  close: </abbr></dfn>
  param: $lookup:glossary$|$text$
  rank: -50
  key: Alt-G
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
    off-key: Return
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
    off-key: Return
  type: heading
  open: <h4>
  close: </h4>
  key: KeyPress-3
ipa:
  props:
    font: Lucida Sans Unicode
    off-key: space
    ime: ipa
  type: span
  open: <a href="
  pipe: '"><span class="ipa">'
  close: '</span></a>'
  param: $lookup:ipa$|$text$
  rank: -50
  language: true
  key: Alt-i
wikt-link:
  props:
    colour: '#6600ff'
    underline: true
  open: <a href="
  pipe: '">'
  close: '</a>'
  param: https://en.wiktionary.org/wiki/$text$|$text$
  rank: -50
link:
  props:
    underline: true
    colour: "#0080ff"
    ime: transliteration
    off-key: space
  open: <a href="
  pipe: '">'
  close: </a>
  param: $text$.html#$url(lookup:lang)$|$upper(text)$
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
    off-key: Return
  type: div
  key: Alt-N
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
    off-key: Return
  type: div
  key: Alt-D
wordlist:
  type: div
  key: Alt-W
type:
  type: div
