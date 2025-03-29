styles:
  '!doctype':
    type: complete
  body:
    end: </p>
    start: <p>
    type: block
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
  form#entry:
    type: line
  h1:
    open: <h1>
    param: ''
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
  javascript:
    type: div
    start: ''
    end: ''
  label:
    type: line
    open: '<label for="'
    pipe: '">'
  link:
    type: complete
  main:
    type: block
  main-page:
    type: div
  meta:
    type: complete
  script:
    close: '></script>'
    type: complete
  template:
    rank: -50
    type: template
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
- <script>src="<internal-link>data/scripts/search.js</internal-link>"</script></head>
- <body><flex><template>navigation pane</template>
- <main-page><main><h1><data>name</data></h1>
- <data>contents</data>
- '<javascript><form#entry><label>wordsearch|Find an entry: </label><input>type="text" name="word" id="wordsearch"</input>'
- <input>type="submit" value="Jump to Entry"</input></form#entry></javascript>
- </main></main-page></flex>
- <footer><template>copyright</template></footer>
- <script>src="<internal-link>data/scripts/parse_href.js</internal-link>"</script>
- <script>src="<internal-link>data/scripts/localise_links.js</internal-link>"</script>
- <inline-script>
- 'let mql = window.matchMedia("(min-width: 800px)");'
- let details = document.getElementById("menu");
- if (mql.matches) {details.open = true;}
- for (elt of document.getElementsByClassName('javascript')) {
- elt.style.display = "block";}</inline-script></body></html@en>
