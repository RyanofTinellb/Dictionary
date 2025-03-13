a:
  type: anchor
also:
  param: <i>See also:</i> <a href="$url(text)$.html">$upper(text)$</a>
  props:
    bold: true
    colour: '#33cc33'
    italics: true
    left: 15
    size: 150
    underline: true
  type: div
b:
  key: b
  props:
    bold: true
    size: 90
block:
  key: Alt-b
  type: div
cite:
  keys:
    'off': Return
    'on': Alt-c
  props:
    italics: true
default:
  props:
    font: Cambria
    ime: autocorrect
    size: 18
definition:
  keys:
    'off': Return
    'on': Alt-D
  props:
    left: 30
  type: div
desktop:
  props:
    colour: '#ff00ff'
  type: span
details|folding:
  key: Alt-F
  props:
    background: '#99ff99'
  type: block
external:
  key: Alt-e
  param: $lookup:external$|$text$
  props:
    colour: '#ff00ff'
    underline: true
  type: anchor
gloss:
  keys:
    'off': Return
    'on': Alt-g
  props:
    italics: true
  type: span
glossary:
  close: </abbr></dfn>
  keys:
    'off': Return
    'on': Alt-k
  open: <dfn><abbr class="glossary" title="
  param: $lookup:glossary$|$text$
  pipe: '">'
  props:
    font: Felix Titling
    size: 80
  rank: -50
  type: span
h2:
  props:
    bold: true
    font: Artisan Paris
    justification: centre
    size: 120
  type: heading
h2|language:
  keys:
    'off': Return
    'on': KeyPress-1
  param: ' id="$url(text)$|$text$'
  props:
    bold: true
    font: Artisan Paris
    justification: centre
    size: 120
    top: 25
  type: heading
h3:
  props:
    bottom: 7
    font: Garamond
    top: 15
    underline: true
  type: heading
h3|part-of-speech:
  keys:
    'off': Return
    'on': KeyPress-2
  props:
    bottom: 7
    font: Garamond
    top: 15
  type: line
h4|subheading:
  keys:
    'off': Return
    'on': KeyPress-3
  props:
    bold: true
    bottom: 15
    font: Harrington
    left: 50
    top: 15
    underline: true
  type: line
hidden:
  key: h
  props:
    colour: '#999999'
    strikeout: true
  type: span
i:
  keys:
    'off': Return
    'on': i
  props:
    italics: true
introduction:
  type: div
ipa:
  close: </span></a>
  keys:
    'off': space
    'on': Alt-i
  language: true
  param: $lookup:ipa$|$text$
  pipe: '"><span class="ipa">'
  props:
    font: Lucida Sans Unicode
    ime: ipa
  type: anchor
javascript:
  type: div
landscape:
  props:
    background: '#ccf'
  type: div
link:
  keys:
    'off': space
    'on': Alt-n
  language: true
  param: $text$.html#$url(lookup:lang)$|$upper(text)$
  props:
    colour: '#0080ff'
    ime: transliteration
    underline: true
  type: anchor
mobile:
  props:
    colour: '#ffff00'
  type: span
mobile-table:
  open: <div class="mobile">
  type: div
multiline:
  key: Alt-m
  type: span
native-script:
  keys:
    'off': Return
    'on': Alt-N
  props:
    justification: centre
  type: div
note:
  key: n
  props:
    italics: true
    size: 90
  type: span
ol:
  type: ol
overline:
  type: span
portrait:
  props:
    background: '#cfc'
  type: div
poslink:
  keys:
    'off': space
    'on': Alt-p
  language: true
  param: $lookup:poslink$|$text$
  props:
    colour: '#c6c'
    underline: true
  type: anchor
pronunciation:
  keys:
    'off': Return
    'on': Alt-P
  props:
    bottom: 25
    justification: centre
    top: 10
  type: div
strong:
  props:
    bold: true
sub: {}
summary|folding:
  key: Alt-f
  props:
    left: 50
  type: line
sup: {}
symbol:
  type: span
table:
  type: table
tbody:
  type: block
template:
  off-key: Return
  props:
    colour: '#0f0'
  type: template
thead:
  type: block
tinellbian:
  keys:
    'off': space
    'on': Alt-t
  language: true
  props:
    font: Tinellbian
    ime: tinellbian
    size: 150
    underline: true
  type: span
translation:
  type: div
transliteration:
  language: true
  off-key: space
  props:
    ime: transliteration
  type: span
type:
  type: div
ul:
  type: ul
universe:
  type: span
wikt-link:
  param: https://en.wiktionary.org/wiki/$text$|$text$
  props:
    colour: '#6600ff'
    underline: true
  type: anchor
wordlist:
  key: Alt-W
  props:
    background: '#ffc'
    left: 15
  type: div
wordlist-caption:
  key: Alt-w
  props:
    colour: '#f99'
  type: div
