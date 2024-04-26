styles:
  navpane:
    tags:
      type: div
  input:
    tags:
      type: complete
  label:
    tags:
      type: line
  ul:
    tags:
      type: block
      start: <li>
      end: </li>
  link:
    tags:
      type: link
  javascript:
    tags:
      type: div
  search-form:
    tags:
      type: block
      open: <form id="search">
      close: </form>
      start: <li class="search">
      end: </li>
  submit-button:
    tags:
      type: inline
      open: <button type="button">
      close: </button>
  links:
    tags:
      type: div
  a:
    tags:
      open: '<a href="'
      pipe: '">'
  toc:
    tags:
      type: data
  random:
    tags:
      type: div
text:
  - <navpane><label><input>type="checkbox" class="menu"</input>
  - <ul><a><link>index</link>|<strong>Dictionary</strong></a>
  - <javascript><search-form><input>type="text" name="term"</input>
  - <button>Search</button></search-form></javascript></ul>
  - <links><ul><toc>initials</toc></ul></links></label>
  - <javascript><random><a><link>special/random_entry</link>|Random Entry</a></random></javascript></navpane>
