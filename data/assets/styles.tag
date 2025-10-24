a: anchor
also:
  param:
    string: <i>See also:</i> <a href="$link$">$text$</a>
    link: /lex/$dictionary(text)$.html
  props:
    bold: true
    colour: '#3c3'
    italics: true
    left: 15
    size: 150
    underline: true
  type: span
  keys:
    'on': Alt-a
    'off': space
also-also:
  param:
    string: $link$|$text$
    link: /lex/$dictionary(text)$.html
  props:
    bold: true
    colour: '#3c3'
    italics: true
    left: 15
    size: 150
    underline: true
  type: anchor
  key: Alt-A
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
derivation:
  type: span
  keys:
    'on': Alt-d
    'off': space
  props:
    size: 80
    border: on
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
  param:
    string: $link$|$node$
    link: $lookup
    category: external
  props:
    colour: '#f0f'
    underline: true
  type: anchor
gloss:
  keys:
    'off': space
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
  param:
    string: $lookup$|$node$
    category: glossary
  pipe: '">'
  props:
    font: Felix Titling
    size: 80
  rank: -50
  type: span
h1|headword:
  type: heading
  param: '>$node$'
  keys:
    'on': 1
    'off': Return
  props:
    bold: true
    font: Tempus Sans ITC
    justification: centre
    size: 130
    ime: special-symbols
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
  param: ' id="$grammar(text)$|$node$'
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
  keys:
    'on': h
    'off': Return
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
  param:
    string: $link$|$text$
    link: $grammar(lookup)$
    category: ipa
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
  param:
    string: $link$|$text$
    link: /lex/$dictionary(text)$.html#$grammar(lookup)$
    category: lang
  props:
    colour: '#0080ff'
    ime: transliteration
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
  keys:
   'on': n
   'off': Return
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
  param:
    string: $link$|$node$
    link: $grammar(lookup)$
    category: poslink
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
remove-pipe:
  type: blank
  pipe: '&NoBreak;'
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
  param:
    string: $expand(link)$|$node$
    link: https://en.wiktionary.org/wiki/$text$
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