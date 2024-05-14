styles:
  '!doctype':
    type: complete
  html:
    type: block
    language: true
  head:
    type: block
  meta:
    type: complete
  title:
    type: line
  h1:
    type: heading
    param: ''
    open: <h1>
  entry-data:
    type: data
  data:
    type: data
  link:
    type: complete
  internal-link:
    type: link
  inline-script:
    type: line
    open: <script>
    close: </script>
  script:
    type: complete
    close: '></script>'
  body:
    type: block
    start: <p>
    end: </p>
  main:
    type: block
  flex:
    type: div
  template:
    type: template
  content:
    type: div
  javascript:
    type: line
  input:
    type: complete
  footer:
    type: block
text:
- <!doctype>html</!doctype>
- <html@en><head><meta>name="viewport" content="width=device-width/initial-scale=1.0"</meta>
- <meta>charset="utf-8"</meta>
- <title><entry-data>name</entry-data> - The Tinellbian Languages Dictionary</title>
- <link>rel="stylesheet" type="text/css" href="<internal-link>data/stylesheets/basic_style.css</internal-link>"</link>
- <link>rel="stylesheet" type="text/css" href="<internal-link>data/stylesheets/style.css</internal-link>"</link>
- <link>rel="icon" type="image/png" href="<internal-link>data/assets/favicon.png</internal-link>"</link>
- <inline-script>let href = window.location.href;
- if (href.indexOf("?") != -1 && href.indexOf("?highlight=") == -1) {
- let term = href.replace(/(.*?\?)(.*?)(#.*|$)/, "$2");
- window.location.href = `<internal-link>special/search</internal-link>?${term}&andOr=and`;
- '}</inline-script>'
- <script>src="<internal-link>data/scripts/search.js</internal-link>"</script>
- <script>src="<internal-link>data/scripts/word_search.js</internal-link>"</script></head>
- <body><flex><template>navigation pane</template>
- <main><h1><data>name</data></h1>
- <data>contents</data>
- <javascript><input>type="text" name="search" id="wordsearch" onKeyDown="if (event.keyCode
  == 13) {wordsearch()}"</input>
- <input>type="button" name="dictionary" id="dictionary" onClick="wordsearch()" value="Jump
  to Entry"</input></javascript>
- </main></flex>
- <footer><template>copyright</template></footer>
- <inline-script>
- for (elt of document.getElementsByClassName('javascript')) {
- elt.style.display = "block";}</inline-script></body></html@en>
