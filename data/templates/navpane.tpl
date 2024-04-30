styles:
  navpane:
    type: div
  input:
    type: complete
  label:
    type: line
  ul:
    type: block
    start: <li>
    end: </li>
  link:
    type: link
  javascript:
    type: div
  strong:
    props:
      bold: true
  search-form:
    type: block
    open: <form id="search">
    close: </form>
    start: <li class="search">
    end: </li>
  button: {}
  submit-button:
    type: inline
    open: <button type="button">
    close: </button>
  links:
    type: div
  a:
    open: <a href="
    pipe: '">'
  toc:
    type: data
  random:
    type: div
text:
- <navpane><label><input>type="checkbox" class="menu"</input>
- <ul><a><link>index</link>|<strong>Dictionary</strong></a>
- <javascript><search-form><input>type="text" name="term"</input>
- <button>Search</button></search-form></javascript></ul>
- <links><ul><toc>initials</toc></ul></links></label>
- <javascript><random><a><link>special/random_entry</link>|Random Entry</a></random></javascript></navpane>
