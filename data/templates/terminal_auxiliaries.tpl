styles:
  landscape:
    type: div
    props:
      background: "#ccf"
  link:
    props:
      underline: true
      colour: "#0080ff"
      ime: transliteration
      off-key: space
    type: anchor
    param: $text$.html#$url(lookup:lang)$|$upper(text)$
    key: Alt-n
    language: true
  multiline:
    type: span
    key: Alt-m
  portrait:
    type: div
    props:
      background: "#cfc"
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
  ul:
    type: block
    start: <li>
    end: </li>
  wordlist:
    props:
      colour: "#f00"
      left: 15
    type: div
    key: Alt-W
  wordlist-caption:
    props:
      colour: "#f99"
    type: div
text:
  - <landscape><table>|h dynamic |h stative |h negative |h habitual |h gnomic
  - h past | <multiline><link@x-tlb-hl>qixara</link@x-tlb-hl> <tinellbian@x-tlb-hl>ねざら</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>pari</link@x-tlb-hl> <tinellbian@x-tlb-hl>ぱり</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>qilaru</link@x-tlb-hl> <tinellbian@x-tlb-hl>ねわる</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>takaru</link@x-tlb-hl> <tinellbian@x-tlb-hl>たかる</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>rusara</link@x-tlb-hl> <tinellbian@x-tlb-hl>るさら</tinellbian@x-tlb-hl></multiline>
  - h present | <multiline><link@x-tlb-hl>canari</link@x-tlb-hl> <tinellbian@x-tlb-hl>やなり</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>ra’aru</link@x-tlb-hl> <tinellbian@x-tlb-hl>らある</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>jari</link@x-tlb-hl> <tinellbian@x-tlb-hl>ぢり</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>nara</link@x-tlb-hl> <tinellbian@x-tlb-hl>なら</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>raru</link@x-tlb-hl> <tinellbian@x-tlb-hl>らる</tinellbian@x-tlb-hl></multiline>
  - h future | <multiline><link@x-tlb-hl>lanaru</link@x-tlb-hl> <tinellbian@x-tlb-hl>わなる</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>nagari</link@x-tlb-hl> <tinellbian@x-tlb-hl>ながり</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>funari</link@x-tlb-hl> <tinellbian@x-tlb-hl>ふなり</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>haru</link@x-tlb-hl> <tinellbian@x-tlb-hl>はる</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>rukaru</link@x-tlb-hl> <tinellbian@x-tlb-hl>るかる</tinellbian@x-tlb-hl></multiline></table></landscape>
  - <portrait><wordlist-caption>past:</wordlist-caption>
  - "<wordlist>dynamic: <link@x-tlb-hl>qixara</link@x-tlb-hl> <tinellbian@x-tlb-hl>ねざら</tinellbian@x-tlb-hl>"
  - "stative: <link@x-tlb-hl>pari</link@x-tlb-hl> <tinellbian@x-tlb-hl>ぱり</tinellbian@x-tlb-hl>"
  - "negative: <link@x-tlb-hl>qilaru</link@x-tlb-hl> <tinellbian@x-tlb-hl>ねわる</tinellbian@x-tlb-hl>"
  - "habitual: <link@x-tlb-hl>takaru</link@x-tlb-hl> <tinellbian@x-tlb-hl>たかる</tinellbian@x-tlb-hl>"
  - "gnomic: <link@x-tlb-hl>rusara</link@x-tlb-hl> <tinellbian@x-tlb-hl>るさら</tinellbian@x-tlb-hl></wordlist>"
  - <wordlist-caption>present:</wordlist-caption>
  - "<wordlist>dynamic: <link@x-tlb-hl>canari</link@x-tlb-hl> <tinellbian@x-tlb-hl>やなり</tinellbian@x-tlb-hl>"
  - "stative: <link@x-tlb-hl>ra’aru</link@x-tlb-hl> <tinellbian@x-tlb-hl>らある</tinellbian@x-tlb-hl>"
  - "negative: <link@x-tlb-hl>jari</link@x-tlb-hl> <tinellbian@x-tlb-hl>ぢり</tinellbian@x-tlb-hl>"
  - "habitual: <link@x-tlb-hl>nara</link@x-tlb-hl> <tinellbian@x-tlb-hl>なら</tinellbian@x-tlb-hl>"
  - "gnomic: <link@x-tlb-hl>raru</link@x-tlb-hl> <tinellbian@x-tlb-hl>らる</tinellbian@x-tlb-hl></wordlist>"
  - <wordlist-caption>future:</wordlist-caption>
  - "<wordlist>dynamic: <link@x-tlb-hl>lanaru</link@x-tlb-hl> <tinellbian@x-tlb-hl>わなる</tinellbian@x-tlb-hl>"
  - "stative: <link@x-tlb-hl>nagari</link@x-tlb-hl> <tinellbian@x-tlb-hl>ながり</tinellbian@x-tlb-hl>"
  - "negative: <link@x-tlb-hl>funari</link@x-tlb-hl> <tinellbian@x-tlb-hl>ふなり</tinellbian@x-tlb-hl>"
  - "habitual: <link@x-tlb-hl>haru</link@x-tlb-hl> <tinellbian@x-tlb-hl>はる</tinellbian@x-tlb-hl>"
  - "gnomic: <link@x-tlb-hl>rukaru</link@x-tlb-hl> <tinellbian@x-tlb-hl>るかる</tinellbian@x-tlb-hl></wordlist></portrait>"
