styles:
  '!doctype':
    tags:
      type: complete
  html:
    tags:
      type: block
      language: true
  head:
    tags:
      type: block
  meta:
    tags:
      type: complete
  title:
    tags:
      type: line
  h1:
    tags:
      type: heading
  entry-data:
    tags:
      type: data
  data:
    tags:
      type: data
  link:
    tags:
      type: complete
  internal-link:
    tags:
      type: link
  inline-script:
    tags:
      type: line
      open: <script>
      close: </script>
  script:
    tags:
      type: complete
      close: '></script>'
  body:
    tags:
      type: block
      start: '<p>'
      end: '</p>'
  flex:
    tags:
      type: div
  template:
    tags:
      type: template
  content:
    tags:
      type: div
  javascript:
    tags:
      type: div
  input:
    tags:
      type: complete
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
  - let term = href.replace(/(.*?\?)(.*?)(#.*|$)//"$2");
  - window.location.href = `<internal-link>search</internal-link>?${term}&andOr=and`;
  - '}</inline-script>'
  - <script>src="<internal-link>data/scripts/search.js</internal-link>"</script>
  - <script>src="<internal-link>data/scripts/word_search.js</internal-link>"</script></head>
  - <body><flex><template>navigation pane</template>
  - <content><h1><data>name</data></h1>
  - <data>contents</data>
  - <javascript><input>type="text" name="search" id="wordsearch" onKeyDown="if
    (event.keyCode == 13) {wordsearch()}"</input>
  - <input>type="button" name="dictionary" id="dictionary" onClick="wordsearch()" value="Jump
    to Entry"</input></javascript>
  - <template>copyright</template></content></flex>
  - <inline-script>
  - for (elt of document.getElementsByClassName('javascript')) {
  - elt.style.display = "block";}</inline-script></body></html@en>