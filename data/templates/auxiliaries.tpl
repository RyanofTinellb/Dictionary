styles:
  landscape:
    props:
      background: '#ccf'
    type: div
  link:
    keys:
      'on': Alt-n
    language: true
    param: $text$.html#$url(lookup:lang)$|$upper(text)$
    props:
      colour: '#0080ff'
      ime: transliteration
      underline: true
    type: anchor
  multiline:
    keys:
      'on': Alt-m
    type: span
  portrait:
    props:
      background: '#cfc'
    type: div
  table:
    type: table
  tbody:
    type: block
  thead:
    type: block
  tinellbian:
    keys:
      'on': Alt-t
    language: true
    props:
      font: Tinellbian
      ime: tinellbian
      size: 150
      underline: true
    type: span
  ul:
    end: </li>
    start: <li>
    type: block
  wordlist:
    keys:
      'on': Alt-W
    props:
      colour: '#f00'
      left: 15
    type: div
  wordlist-caption:
    props:
      colour: '#f99'
    type: div
text:
- <landscape><table>|h dynamic |h stative |h negative |h habitual |h gnomic
- h past | <multiline><link@x-tlb-hl>qixa</link@x-tlb-hl><tinellbian>ねざ</tinellbian></multiline> | <multiline><link@x-tlb-hl>pi</link@x-tlb-hl><tinellbian>ぴ</tinellbian></multiline> | <multiline><link@x-tlb-hl>qilu</link@x-tlb-hl><tinellbian>ねを</tinellbian></multiline> | <multiline><link@x-tlb-hl>taku</link@x-tlb-hl><tinellbian>たく</tinellbian></multiline> | <multiline><link@x-tlb-hl>rusa</link@x-tlb-hl><tinellbian>るさ</tinellbian></multiline>
- h present | <multiline><link@x-tlb-hl>cani</link@x-tlb-hl><tinellbian>やに</tinellbian></multiline> | <multiline><link@x-tlb-hl>ra’u</link@x-tlb-hl><tinellbian>らう</tinellbian></multiline> | <multiline><link@x-tlb-hl>ji</link@x-tlb-hl><tinellbian>じ</tinellbian></multiline> | <multiline><link@x-tlb-hl>na</link@x-tlb-hl><tinellbian>な</tinellbian></multiline> | <multiline><link@x-tlb-hl>ru</link@x-tlb-hl><tinellbian>る</tinellbian></multiline>
- h future | <multiline><link@x-tlb-hl>lanu</link@x-tlb-hl><tinellbian>わぬ</tinellbian></multiline> | <multiline><link@x-tlb-hl>nagi</link@x-tlb-hl><tinellbian>なぎ</tinellbian></multiline> | <multiline><link@x-tlb-hl>funi</link@x-tlb-hl><tinellbian>ふに</tinellbian></multiline> | <multiline><link@x-tlb-hl>hu</link@x-tlb-hl><tinellbian>ほ</tinellbian></multiline> | <multiline><link@x-tlb-hl>ruku</link@x-tlb-hl><tinellbian>るく</tinellbian></multiline></table></landscape>
- <portrait><wordlist-caption>past:</wordlist-caption>
- '<wordlist>dynamic: <link@x-tlb-hl>qixa</link@x-tlb-hl> <tinellbian>ねざ</tinellbian>'
- 'stative: <link@x-tlb-hl>pi</link@x-tlb-hl> <tinellbian>ぴ</tinellbian>'
- 'negative: <link@x-tlb-hl>qilu</link@x-tlb-hl> <tinellbian>ねを</tinellbian>'
- 'habitual: <link@x-tlb-hl>taku</link@x-tlb-hl> <tinellbian>たく</tinellbian>'
- 'gnomic: <link@x-tlb-hl>rusa</link@x-tlb-hl> <tinellbian>るさ</tinellbian></wordlist>'
- <wordlist-caption>present:</wordlist-caption>
- '<wordlist>dynamic: <link@x-tlb-hl>cani</link@x-tlb-hl> <tinellbian>やに</tinellbian>'
- 'stative: <link@x-tlb-hl>ra’u</link@x-tlb-hl> <tinellbian>らう</tinellbian>'
- 'negative: <link@x-tlb-hl>ji</link@x-tlb-hl> <tinellbian>じ</tinellbian>'
- 'habitual: <link@x-tlb-hl>na</link@x-tlb-hl> <tinellbian>な</tinellbian>'
- 'gnomic: <link@x-tlb-hl>ru</link@x-tlb-hl> <tinellbian>る</tinellbian></wordlist>'
- <wordlist-caption>future:</wordlist-caption>
- '<wordlist>dynamic: <link@x-tlb-hl>lanu</link@x-tlb-hl> <tinellbian>わぬ</tinellbian>'
- 'stative: <link@x-tlb-hl>nagi</link@x-tlb-hl> <tinellbian>なぎ</tinellbian>'
- 'negative: <link@x-tlb-hl>funi</link@x-tlb-hl> <tinellbian>ふに</tinellbian>'
- 'habitual: <link@x-tlb-hl>hu</link@x-tlb-hl> <tinellbian>ほ</tinellbian>'
- 'gnomic: <link@x-tlb-hl>ruku</link@x-tlb-hl> <tinellbian>るく</tinellbian></wordlist></portrait>'
