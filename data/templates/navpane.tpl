styles:
  a:
    type: anchor
  button: {}
  details:
    type: block
    open: <details open>
  input:
    type: complete
  javascript:
    type: div
  label:
    type: line
  link:
    type: link
  links:
    type: div
  nav:
    type: block
    open: <nav class="main">
  random:
    type: div
  search-form:
    type: block
    open: <form id="search">
    close: </form>
    start: <li class="search">
    end: </li>
  strong:
    props:
      bold: true
  submit-button:
    type: inline
    open: <button type="button">
    close: </button>
  summary:
    type: line
  toc:
    type: data
  ul:
    type: block
    start: <li>
    end: </li>
text:
- <nav><details><summary>Menu</summary>
- <ul><a><link>index</link>|<strong>Dictionary</strong></a>
- <javascript><search-form><input>type="text" name="term"</input>
- <button>Search</button></search-form></javascript></ul>
- <javascript><random><a><link>special/random_entry</link>|Random Entry</a></random></javascript></details></nav>
