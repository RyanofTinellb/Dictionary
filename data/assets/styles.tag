h2|language:
  keys:
    'on': 1
    'off': Return
  param: ' id="$url(text)$|$text$'
  props:
    bold: true
    font: Artisan Paris
    justification: centre
    size: 120
    top: 25
  type: heading
  hierarchy:
    rank: 1
    key: l
    tag: article|faux-ami
native-script:
  type: div
  keys:
    'on': Alt-N
    'off': Return
  props:
    justification: centre
  hierarchy:
    rank: 2
    key: n
    tag: div|homophone
pronunciation:
  type: div
  keys:
    'on': Alt-P
    'off': Return
  props:
    bottom: 25
    justification: centre
    top: 10
  hierarchy:
    rank: 3
    tag: div|homograph
    key: r
    function: strip-/
h3|part-of-speech:
  type: line
  keys:
    'on': 2
    'off': Return
  props:
    bottom: 7
    font: Garamond
    top: 15
  hierarchy:
    rank: 4
    key: p
    tag: section|homonym
definition:
  type: div
  keys:
    'on': Alt-D
    'off': Return
  props:
    left: 30
  hierarchy:
    rank: 5
    key: d
    save: true
    function: caps
h4|subheading:
  type: line
  keys:
    'on': 3
    'off': Return
  props:
    bold: true
    bottom: 15
    font: Harrington
    left: 50
    top: 15
    underline: true
  hierarchy:
    rank: 6
    tag: section
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
    'on': Alt-c
    'off': Return
  props:
    italics: true
default:
  props:
    font: Cambria
    ime: autocorrect
    size: 18
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
    'on': Alt-g
    'off': Return
  props:
    italics: true
  type: span
glossary:
  close: </abbr></dfn>
  keys:
    'on': Alt-k
    'off': Return
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
h3:
  props:
    bottom: 7
    font: Garamond
    top: 15
    underline: true
  type: heading

hidden:
  key: h
  props:
    colour: '#999999'
    strikeout: true
  type: span
i:
  keys:
    'on': i
    'off': Return
  props:
    italics: true
introduction:
  type: div
ipa:
  close: </span></a>
  keys:
    'on': Alt-i
    'off': space
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
    'on': Alt-n
    'off': space
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
multiline:
  key: Alt-m
  type: span
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
    'on': Alt-p
    'off': space
  language: true
  param: $lookup:poslink$|$text$
  props:
    colour: '#c6c'
    underline: true
  type: anchor
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
    'on': Alt-t
    'off': space
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
