styles:
  wordlist:
    props:
      background: '#ffc'
      left: 15
    type: ul
  block:
    prequel: <li>
    props:
      border: true
    rank: 90
    sequel: </li>
    type: ul
  link:
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
text:
- <wordlist><block><link@en>Yao</link@en>
- <link@en>Caëmi</link@en>
- <link@en>Selu</link@en></block>
- <block><link@en>Volzd</link@en>
- <link@en>Ziguti</link@en>
- <link@en>Qolt</link@en></block>
- <block><link@en>Vùalq</link@en>
- <link@en>Tserron</link@en>
- <link@en>Teydu</link@en>
- </block></wordlist>