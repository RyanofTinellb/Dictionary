default:
  props:
    font: Cambria
    size: 18
    ime: autocorrect
also:
  type: div
  param: '<i>See also:</i> <a href="$url(text)$.html">$upper(text)$</a>'
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
  key: Alt-f
  props:
    left: 50
folding:
  type: block
  open: <details class="folding">
  close: </details>
  key: Alt-F
  props:
    background: '#99ff99'
gloss:
  props:
    italics: true
    off-key: Return
  type: span
  key: Alt-g
i:
  props:
    italics: true
multiline:
  type: span
  key: Alt-m
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
  props:
    italics: true
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
  type: anchor
  language: true
  param: $lookup:poslink$|$text$
  key: Alt-p
  rank: -50
story-link:
  props:
    underline: true
    colour: '#ff00ff'
  type: anchor
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
  open: <h3 class="part-of-speech"
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
  open: <h4 class="subheading"
  close: </h4>
  key: KeyPress-3
ipa:
  props:
    font: Lucida Sans Unicode
    off-key: space
    ime: ipa
  type: anchor
  pipe: '"><span class="ipa">'
  close: '</span></a>'
  param: $lookup:ipa$|$text$
  language: true
  key: Alt-i
wikt-link:
  props:
    colour: '#6600ff'
    underline: true
  type: anchor
  param: https://en.wiktionary.org/wiki/$text$|$text$
link:
  props:
    underline: true
    colour: "#0080ff"
    ime: transliteration
    off-key: space
  type: anchor
  param: $text$.html#$url(lookup:lang)$|$upper(text)$
  key: l
  language: true
a:
  type: anchor
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
