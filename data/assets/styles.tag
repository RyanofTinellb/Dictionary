default:
  props:
    font: Cambria
    size: 18
    ime: autocorrect
a:
  type: anchor
also:
  type: div
  param: <i>See also:</i> <a href="$url(text)$.html">$upper(text)$</a>
  props:
    size: 150
    colour: '#33cc33'
    left: 15
    italics: true
    bold: true
    underline: true
b:
  props:
    bold: true
    size: 90
block:
  type: div
cite:
  key: Alt-c
  props:
    italics: true
definition:
  props:
    left: 30
    off-key: Return
  type: div
  key: Alt-D
desktop:
  props:
    colour: '#ff00ff'
  type: span
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
glossary:
  props:
    font: Felix Titling
    size: 80
    off-key: Return
  type: span
  open: <dfn><abbr class="glossary" title="
  pipe: '">'
  close: </abbr></dfn>
  param: $lookup:glossary$|$text$
  rank: -50
  key: Alt-k
h2:
  type: heading
  props:
    font: Artisan Paris
    size: 120
    bold: true
    justification: centre
h3:
  props:
    font: Garamond
    underline: true
    top: 15
    bottom: 7
  type: heading
hidden:
  props:
    colour: '#999999'
  type: span
  key: h
i:
  props:
    italics: true
introduction:
  type: div
ipa:
  props:
    font: Lucida Sans Unicode
    off-key: space
    ime: ipa
  type: anchor
  pipe: '"><span class="ipa">'
  close: </span></a>
  param: $lookup:ipa$|$text$
  language: true
  key: Alt-i
javascript:
  type: div
language-name:
  props:
    font: Artisan Paris
    size: 120
    bold: true
    justification: centre
    off-key: Return
    top: 25
  key: KeyPress-1
  type: heading
  open: '<h2 class="language" '
  pipe: '>'
  close: </h2>
  param: id="$url(text)$"|$text$
link:
  props:
    underline: true
    colour: '#0080ff'
    ime: transliteration
    off-key: space
  type: anchor
  param: $text$.html#$url(lookup:lang)$|$upper(text)$
  key: Alt-n
  language: true
mobile:
  props:
    colour: '#ffff00'
  type: span
mobile-table:
  type: div
  open: <div class="mobile">
multiline:
  type: span
  key: Alt-m
native-script:
  props:
    justification: centre
    off-key: Return
  type: div
  key: Alt-N
note:
  type: span
  props:
    italics: true
ol:
  type: block
  start: <li>
  end: </li>
overbar:
  type: span
part-of-speech:
  props:
    font: Garamond
    underline: true
    top: 15
    bottom: 7
    off-key: space
  key: KeyPress-2
  type: heading
  open: <h3 class="part-of-speech"
  close: </h3>
poslink:
  props:
    underline: true
    off-key: Return
  type: anchor
  language: true
  param: $lookup:poslink$|$text$
  key: Alt-p
  rank: -50
pronunciation:
  type: div
  key: Alt-P
  props:
    justification: centre
    top: 10
    bottom: 25
    off-key: Return
story-link:
  props:
    underline: true
    colour: '#ff00ff'
  type: anchor
  param: $lookup:external$|$text$
  rank: -50
strong:
  props:
    bold: true
sub: {}
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
sup: {}
symbol:
  type: span
table:
  type: table
tbody:
  type: block
thead:
  type: block
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
translation:
  type: div
transliteration:
  type: span
  language: true
  props:
    ime: transliteration
    off-key: space
type:
  type: div
ul:
  type: block
  start: <li>
  end: </li>
universe:
  type: span
wikt-link:
  props:
    colour: '#6600ff'
    underline: true
  type: anchor
  param: https://en.wiktionary.org/wiki/$text$|$text$
wordlist:
  props:
    background: '#ffcccc'
    left: 15
  type: div
  rank: 110
  key: Alt-W
