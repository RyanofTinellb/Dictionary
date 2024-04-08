- props:
    font: Cambria
    size: 18
  tags:
    name: default
    block: default
- props:
    font: Felix Titling
    size: 80
  tags:
    name: abbr
- tags:
    name: also
- tags:
    name: tinellbian
    language: ' lang="x-tlb-%l"'
  props:
    font: tinellbian
    size: 150
- tags:
    name: h1
    key: F
  props:
    font: Artisan Paris
    size: 120
    bold: true
    justification: centre
- tags:
    name: hidden
    key: h
  props:
    colour: '#999999'
- tags:
    name: h2
    key: 'KeyPress-2'
  props:
    font: Garamond
    underline: true
    top: 15
    bottom: 7
    left: 20
- tags:
    name: h3
  props:
    font: Harrington
    bold: true
    underline: true
    top: 15
    bottom: 15
    left: 50
- tags:
    name: ipa
    start: '<span class="ipa">'
    end: '</span>'
  props:
    font: 'Lucida Sans Unicode'
- tags:
    name: link
    block: disabled
    key: N
    language: true
  props:
    underline: true
    colour: '#0080ff'
- tags:
    name: a
    start: '<a href="'
    pipe: '">'
- tags:
    name: native_script
    start: '<div class="native-script">'
    end: '</div>'
  props:
    justification: centre
- tags:
    name: pronunciation
    start: '<span class="pronunciation">'
    end: '</span>'
- tags:
    name: definition
    start: '<div class="definition">'
    end: '</div>'
- tags:
    name: wordlist
    start: '<div class="wordlist">'
    end: '</div>'
- tags:
    name: block
    start: '<div class="block">'
    end: '</div>'