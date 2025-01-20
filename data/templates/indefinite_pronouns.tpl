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
  - <landscape><table><thead>hr2 |hc2 object |hr2 place |hr2 action |hr2 manner |hr2 state
  - h noun |h determiner</thead>
  - <tbody>h proximate | <multiline><link@x-tlb-hl>mari</link@x-tlb-hl> <tinellbian@x-tlb-hl>まり</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>-mari</link@x-tlb-hl> <tinellbian@x-tlb-hl>まり</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>majja</link@x-tlb-hl> <tinellbian@x-tlb-hl>まっぢ</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>marila</link@x-tlb-hl> <tinellbian@x-tlb-hl>まりわ</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>madusi</link@x-tlb-hl> <tinellbian@x-tlb-hl>まどせ</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>marika</link@x-tlb-hl> <tinellbian@x-tlb-hl>まりか</tinellbian@x-tlb-hl></multiline>
  - h distal | <multiline><link@x-tlb-hl>kasi</link@x-tlb-hl> <tinellbian@x-tlb-hl>かせ</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>-kasi</link@x-tlb-hl> <tinellbian@x-tlb-hl>かせ</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>kasuja</link@x-tlb-hl> <tinellbian@x-tlb-hl>かすぢ</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>kalisa</link@x-tlb-hl> <tinellbian@x-tlb-hl>かえさ</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>kadusi</link@x-tlb-hl> <tinellbian@x-tlb-hl>かどせ</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>kasika</link@x-tlb-hl> <tinellbian@x-tlb-hl>かせか</tinellbian@x-tlb-hl></multiline>
  - h interrogative | <multiline><link@x-tlb-hl>sama</link@x-tlb-hl> <tinellbian@x-tlb-hl>さま</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>-diku</link@x-tlb-hl> <tinellbian@x-tlb-hl>でく</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>satta</link@x-tlb-hl> <tinellbian@x-tlb-hl>さった</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>sulla</link@x-tlb-hl> <tinellbian@x-tlb-hl>すっわ</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>lara</link@x-tlb-hl> <tinellbian@x-tlb-hl>わら</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>saqqa</link@x-tlb-hl> <tinellbian@x-tlb-hl>さっげ</tinellbian@x-tlb-hl></multiline>
  - h negative | <multiline><link@x-tlb-hl>ci’u</link@x-tlb-hl> <tinellbian@x-tlb-hl>ゆい</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>-cu</link@x-tlb-hl> <tinellbian@x-tlb-hl>ゆ</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>qa’i</link@x-tlb-hl> <tinellbian@x-tlb-hl>げい</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>buni</link@x-tlb-hl> <tinellbian@x-tlb-hl>ぶに</tinellbian@x-tlb-hl></multiline> |r2c2 -
  - h universal | <multiline><link@x-tlb-hl>’aba</link@x-tlb-hl> <tinellbian@x-tlb-hl>あば</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>-’aba</link@x-tlb-hl> <tinellbian@x-tlb-hl>あば</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>batuja</link@x-tlb-hl> <tinellbian@x-tlb-hl>ばとぢ</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>’abala</link@x-tlb-hl> <tinellbian@x-tlb-hl>あばわ</tinellbian@x-tlb-hl></multiline>
  - h existential | <multiline><link@x-tlb-hl>’umi</link@x-tlb-hl> <tinellbian@x-tlb-hl>うみ</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>-mi</link@x-tlb-hl> <tinellbian@x-tlb-hl>み</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>mituja</link@x-tlb-hl> <tinellbian@x-tlb-hl>みとぢ</tinellbian@x-tlb-hl></multiline> | <multiline><link@x-tlb-hl>’amila</link@x-tlb-hl> <tinellbian@x-tlb-hl>あみわ</tinellbian@x-tlb-hl></multiline> |c2 <multiline><link@x-tlb-hl>fana</link@x-tlb-hl> <tinellbian@x-tlb-hl>へな</tinellbian@x-tlb-hl></multiline></tbody></table></landscape>
  - <portrait><wordlist-caption>proximate:</wordlist-caption>
  - "<wordlist>object noun: <link@x-tlb-hl>mari</link@x-tlb-hl> <tinellbian@x-tlb-hl>まり</tinellbian@x-tlb-hl>"
  - "object determiner: <link@x-tlb-hl>-mari</link@x-tlb-hl> <tinellbian@x-tlb-hl>まり</tinellbian@x-tlb-hl>"
  - "place: <link@x-tlb-hl>majja</link@x-tlb-hl> <tinellbian@x-tlb-hl>まっぢ</tinellbian@x-tlb-hl>"
  - "action: <link@x-tlb-hl>marila</link@x-tlb-hl> <tinellbian@x-tlb-hl>まりわ</tinellbian@x-tlb-hl>"
  - "manner: <link@x-tlb-hl>madusi</link@x-tlb-hl> <tinellbian@x-tlb-hl>まどせ</tinellbian@x-tlb-hl>"
  - "state: <link@x-tlb-hl>marika</link@x-tlb-hl> <tinellbian@x-tlb-hl>まりか</tinellbian@x-tlb-hl></wordlist>"
  - <wordlist-caption>distal:</wordlist-caption>
  - "<wordlist>object noun: <link@x-tlb-hl>kasi</link@x-tlb-hl> <tinellbian@x-tlb-hl>かせ</tinellbian@x-tlb-hl>"
  - "object determiner: <link@x-tlb-hl>-kasi</link@x-tlb-hl> <tinellbian@x-tlb-hl>かせ</tinellbian@x-tlb-hl>"
  - "place: <link@x-tlb-hl>kasuja</link@x-tlb-hl> <tinellbian@x-tlb-hl>かすぢ</tinellbian@x-tlb-hl>"
  - "action: <link@x-tlb-hl>kalisa</link@x-tlb-hl> <tinellbian@x-tlb-hl>かえさ</tinellbian@x-tlb-hl>"
  - "manner: <link@x-tlb-hl>kadusi</link@x-tlb-hl> <tinellbian@x-tlb-hl>かどせ</tinellbian@x-tlb-hl>"
  - "state: <link@x-tlb-hl>kasika</link@x-tlb-hl> <tinellbian@x-tlb-hl>かせか</tinellbian@x-tlb-hl></wordlist>"
  - <wordlist-caption>interrogative:</wordlist-caption>
  - "<wordlist>object noun: <link@x-tlb-hl>sama</link@x-tlb-hl> <tinellbian@x-tlb-hl>さま</tinellbian@x-tlb-hl>"
  - "object determiner: <link@x-tlb-hl>-diku</link@x-tlb-hl> <tinellbian@x-tlb-hl>でく</tinellbian@x-tlb-hl>"
  - "place: <link@x-tlb-hl>satta</link@x-tlb-hl> <tinellbian@x-tlb-hl>さった</tinellbian@x-tlb-hl>"
  - "action: <link@x-tlb-hl>sulla</link@x-tlb-hl> <tinellbian@x-tlb-hl>すっわ</tinellbian@x-tlb-hl>"
  - "manner: <link@x-tlb-hl>lara</link@x-tlb-hl> <tinellbian@x-tlb-hl>わら</tinellbian@x-tlb-hl>"
  - "state: <link@x-tlb-hl>saqqa</link@x-tlb-hl> <tinellbian@x-tlb-hl>さっげ</tinellbian@x-tlb-hl></wordlist>"
  - <wordlist-caption>negative:</wordlist-caption>
  - "<wordlist>object noun: <link@x-tlb-hl>ci’u</link@x-tlb-hl> <tinellbian@x-tlb-hl>ゆい</tinellbian@x-tlb-hl>"
  - "object determiner: <link@x-tlb-hl>-cu</link@x-tlb-hl> <tinellbian@x-tlb-hl>ゆ</tinellbian@x-tlb-hl>"
  - "place: <link@x-tlb-hl>qa’i</link@x-tlb-hl> <tinellbian@x-tlb-hl>げい</tinellbian@x-tlb-hl>"
  - "action: <link@x-tlb-hl>buni</link@x-tlb-hl> <tinellbian@x-tlb-hl>ぶに</tinellbian@x-tlb-hl></wordlist>"
  - <wordlist-caption>universal:</wordlist-caption><wordlist>
  - "object noun: <link@x-tlb-hl>’aba</link@x-tlb-hl> <tinellbian@x-tlb-hl>あば</tinellbian@x-tlb-hl>"
  - "object determiner: <link@x-tlb-hl>-’aba</link@x-tlb-hl> <tinellbian@x-tlb-hl>あば</tinellbian@x-tlb-hl>"
  - "place: <link@x-tlb-hl>batuja</link@x-tlb-hl> <tinellbian@x-tlb-hl>ばとぢ</tinellbian@x-tlb-hl>"
  - "action: <link@x-tlb-hl>’abala</link@x-tlb-hl> <tinellbian@x-tlb-hl>あばわ</tinellbian@x-tlb-hl></wordlist>"
  - <wordlist-caption>existential:</wordlist-caption><wordlist>
  - "object noun: <link@x-tlb-hl>’umi</link@x-tlb-hl> <tinellbian@x-tlb-hl>うみ</tinellbian@x-tlb-hl>"
  - "object determiner: <link@x-tlb-hl>-mi</link@x-tlb-hl> <tinellbian@x-tlb-hl>み</tinellbian@x-tlb-hl>"
  - "place: <link@x-tlb-hl>mituja</link@x-tlb-hl> <tinellbian@x-tlb-hl>みとぢ</tinellbian@x-tlb-hl>"
  - "action: <link@x-tlb-hl>’amila</link@x-tlb-hl> <tinellbian@x-tlb-hl>あみわ</tinellbian@x-tlb-hl>"
  - "manner / state: <link@x-tlb-hl>fana</link@x-tlb-hl> <tinellbian@x-tlb-hl>へな</tinellbian@x-tlb-hl></wordlist></portrait>"
