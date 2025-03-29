styles:
  '!doctype':
    type: complete
  body:
    end: </p>
    start: <p>
    type: block
  content:
    type: div
  flex:
    type: div
  footer:
    type: block
  form:
    type: block
  form#entry:
    type: line
  h1:
    type: heading
  head:
    type: block
  html:
    language: true
    type: block
  inline-script:
    close: </script>
    open: <script>
    type: line
  input:
    type: complete
  internal-link:
    type: link
  internal-script:
    close: </script>
    open: <script>
    type: line
  javascript:
    type: line
  label:
    type: line
    open: '<label for="'
    pipe: '">'
  link:
    type: complete
  main:
    close: </main></div>
    open: <div class="main-page"><main>
    type: block
  main-page:
    rank: 110
    type: div
  meta:
    type: complete
  results:
    open: <div class="results" id="results">
    type: div
  script:
    close: '></script>'
    type: complete
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
- <main-page><main><h1>Search the Dictionary</h1>
- <form><input>type="text" class="term" id="term" name="term" placeholder="Search..."</input>
- <input>type="submit" class="submit" value="Search"</input></form>
- <results>Searching...</results>
- '<javascript><form#entry><label>wordsearch|Find an entry: </label><input>type="text" name="word" id="wordsearch"</input>'
- <input>type="submit" value="Jump to Entry"</input></form#entry></javascript></main></main-page></flex>
- <footer><template>copyright</template></footer>
- <script>src="/data/scripts/search.js"</script>
- <script>src="/data/scripts/404search.js"</script>
- <inline-script>
- 'let mql = window.matchMedia("(min-width: 800px)");'
- let details = document.getElementById("menu");
- if (mql.matches) {details.open = true;}
- for (elt of document.getElementsByClassName('javascript')) {
- elt.style.display = "block";}</inline-script></body></html@en>
