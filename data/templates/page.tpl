styles:
  '!doctype':
    type: complete
  body:
    type: block
    start: <p>
    end: </p>
  content:
    type: div
  data:
    type: data
  entry-data:
    type: data
  flex:
    type: div
  footer:
    type: block
  h1:
    type: heading
    param: ''
    open: <h1>
  head:
    type: block
  html:
    type: block
    language: true
  inline-script:
    type: line
    open: <script>
    close: </script>
  input:
    type: complete
  internal-link:
    type: link
  javascript:
    type: line
  link:
    type: complete
  main:
    type: block
  main-page:
    type: div
  meta:
    type: complete
  script:
    type: complete
    close: '></script>'
  template:
    type: template
    rank: -50
  title:
    type: line
text:
- <!doctype>html</!doctype>
- <html@en><head><meta>name="viewport" content="width=device-width/initial-scale=1.0"</meta>
- <meta>charset="utf-8"</meta>
- <title><entry-data>name</entry-data> - The Tinellbian Languages Dictionary</title>
- <link>rel="stylesheet" type="text/css" href="<internal-link>data/stylesheets/basic_style.css</internal-link>"</link>
- <link>rel="stylesheet" type="text/css" href="<internal-link>data/stylesheets/style.css</internal-link>"</link>
- <link>rel="icon" type="image/png" href="<internal-link>data/assets/favicon.png</internal-link>"</link>
- <script>src="<internal-link>data/scripts/search.js</internal-link>"</script>
- <script>src="<internal-link>data/scripts/word_search.js</internal-link>"</script></head>
- <body><flex><template>navigation pane</template>
- <main-page><main><h1><data>name</data></h1>
- <data>contents</data>
- <javascript><input>type="text" name="search" id="wordsearch" onKeyDown="if (event.keyCode
  == 13) {wordsearch()}"</input>
- <input>type="button" name="dictionary" id="dictionary" onClick="wordsearch()" value="Jump
  to Entry"</input></javascript>
- </main></main-page></flex>
- <footer><template>copyright</template></footer>
- <script>src="<internal-link>data/scripts/parse_href.js</internal-link>"</script>
- <inline-script>
- 'let mql = window.matchMedia("(min-width: 800px)");'
- 'let details = document.getElementById("menu");'
- if (mql.matches) {details.open = true;}
- for (elt of document.getElementsByClassName('javascript')) {
- elt.style.display = "block";}</inline-script></body></html@en>
