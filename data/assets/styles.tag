a: anchor
also:
  param: <i>See also:</i> <a href="$url(text)$.html">$upper(text)$</a>
  props:
    bold: true
    colour: '#3c3'
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
  prequel: <li>
  props:
    border: true
  rank: 90
  sequel: </li>
  type: ul
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
  hierarchy:
    function: caps
    key: d
    rank: 5
    save: true
  keys:
    'off': Return
    'on': Alt-D
  props:
    left: 30
  type: div
definitions: ol
desktop:
  props:
    colour: '#f0f'
  type: span
details|folding:
  key: Alt-F
  pipe: '&NoBreak;'
  props:
    background: '#9f9'
  type: block
external:
  key: Alt-e
  param: $link:lookup:external$|$text$
  props:
    colour: '#f0f'
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
    'on': Alt-G
  open: <dfn><abbr class="glossary" title="
  param: $lookup:glossary$|$text$
  pipe: '">'
  props:
    font: Felix Titling
    size: 80
  rank: -50
  type: span
h1|headword:
  type: heading
  keys:
    'on': 1
    'off': Return
  props:
    bold: true
    font: Tempus Sans ITC
    justification: centre
    size: 130
h2:
  props:
    bold: true
    font: Artisan Paris
    justification: centre
    size: 120
  type: heading
h2|language:
  hierarchy:
    key: l
    rank: 1
    tag: article|faux-ami
  keys:
    'off': Return
    'on': 2
  param: ' id="$url(text)$|$text$'
  props:
    bold: true
    font: Artisan Paris
    justification: centre
    size: 120
    top: 10
  type: heading
h3:
  props:
    bottom: 7
    font: Garamond
    top: 15
    underline: true
  type: heading
h3|part-of-speech:
  hierarchy:
    key: p
    rank: 4
    tag: section|homonym
  keys:
    'off': Return
    'on': 3
  props:
    bottom: 7
    font: Garamond
    top: 15
  type: line
h4|subheading:
  hierarchy:
    rank: 6
    tag: section|subsection
  keys:
    'off': Return
    'on': 4
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
    colour: '#999'
    strikeout: true
  type: span
i:
  keys:
    'off': Return
    'on': i
  props:
    italics: true
introduction: div
ipa:
  close: </span></a>
  keys:
    'off': space
    'on': Alt-i
  language: true
  param: $link:lookup:ipa$|$text$
  pipe: '"><span class="ipa">'
  props:
    font: Lucida Sans Unicode
    ime: ipa
  type: anchor
javascript: div
landscape:
  props:
    background: '#ccf'
  type: div
link:
  keys:
    'off': space
    'on': Alt-n
  language: true
  param: /lex/$text$.html#$url(lookup:lang)$|$upper(text)$
  props:
    colour: '#0080ff'
    ime: links
    underline: true
  type: anchor
list-block: ul
mobile:
  props:
    colour: '#ff0'
  type: span
multiline:
  key: Alt-m
  type: span
native-script:
  hierarchy:
    key: n
    rank: 2
    tag: div|homophone
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
overline: span
portrait:
  props:
    background: '#cfc'
  type: div
poslink:
  keys:
    'off': space
    'on': Alt-p
  language: true
  param: $link:lookup:poslink$|$text$
  props:
    colour: '#c6c'
    underline: true
  type: anchor
pronunciation:
  hierarchy:
    function: strip-/
    key: r
    rank: 3
    tag: div|homograph
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
  keys:
    'off': Return
    'on': Alt-f
  props:
    left: 50
  type: line
sup: {}
symbol: span
table: table
tbody: block
template:
  off-key: Return
  props:
    colour: '#0f0'
  type: template
thead: block
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
translation: div
transliteration:
  keys:
    'off': Return
    'on': Alt-T
  language: true
  props:
    bold: true
    ime: transliteration
  type: span
type: div
ul: ul
universe: span
wikt-link:
  param: https://en.wiktionary.org/wiki/$text$|$text$
  props:
    colour: '#60f'
    underline: true
  type: anchor
wordlist:
  key: Alt-W
  props:
    background: '#ffc'
    left: 15
  type: ul
wordlist-caption:
  key: Alt-w
  props:
    colour: '#f99'
  type: div
