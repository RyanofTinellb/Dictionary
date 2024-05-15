styles:
  '!doctype':
    type: complete
  body:
    type: block
    start: <p>
    end: </p>
  content:
    type: div
  flex:
    type: div
  footer:
    type: block
  form:
    type: block
  h1:
    type: heading
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
  internal-script:
    type: line
    open: <script>
    close: </script>
  javascript:
    type: line
  link:
    type: complete
  main:
    type: block
  meta:
    type: complete
  results:
    open: <div class="results" id="results">
    type: div
  script:
    type: complete
    close: '></script>'
  template:
    type: template
  title:
    type: line
text:
- <!doctype>html</!doctype>
- <html@en><head><meta>name="viewport" content="width=device-width/initial-scale=1.0"</meta>
- <meta>charset="utf-8"</meta>
- <title>Search - The Tinellbian Languages Dictionary</title>
- <link>rel="stylesheet" type="text/css" href="../data/stylesheets/basic_style.css"</link>
- <link>rel="stylesheet" type="text/css" href="../data/stylesheets/style.css"</link>
- <link>rel="icon" type="image/png" href="../data/assets/favicon.png"</link></head>
- <body><flex><template>navigation pane</template>
- <main><h1>Search the Dictionary</h1>
- <form><input>type="text" class="term" id="term" name="term" placeholder="Search..."</input>
- <input>type="submit" class="submit" value="Search"</input></form>
- <results>Searching...</results>
- <javascript><input>type="text" name="search" id="wordsearch" onKeyDown="if (event.keyCode
  == 13) {wordsearch()}"</input>
- <input>type="button" name="dictionary" id="dictionary" onClick="wordsearch()" value="Jump
  to Entry"</input></javascript></main></flex>
- <footer><template>copyright</template></footer>
- <script>src="/data/scripts/search.js"</script>
- <script>src="/data/scripts/404search.js"</script>
- <inline-script>
- for (elt of document.getElementsByClassName('javascript')) {
- elt.style.display = "block";}</inline-script></body></html@en>
