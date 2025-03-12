styles:
  a:
    type: anchor
  button: {}
  details:
    open: <details id="menu">
    type: block
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
    open: <nav class="main">
    type: block
  search-form:
    close: </form>
    open: <form id="search">
    type: block
  strong:
    props:
      bold: true
  submit-button:
    close: </button>
    open: <button type="button">
    type: inline
  summary:
    type: line
  toc:
    type: data
  ul:
    end: </li>
    start: <li>
    type: block
text:
- <nav><details><summary>Menu</summary>
- <a><link>index</link>|<strong>Dictionary</strong></a>
- <javascript><search-form><input>type="text" name="term"</input>
- <button>Search</button></search-form></javascript>
- <javascript><ul><a><link>special/random_entry</link>|Random Entry</a></ul></javascript></details></nav>
