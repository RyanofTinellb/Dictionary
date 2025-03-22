styles:
  a:
    type: anchor
  button: {}
  details#menu:
    type: block
  entry-data:
    type: data
  input:
    type: complete
  javascript:
    type: div
  label:
    type: line
    open: '<label for="'
    pipe: '">'
  link:
    type: link
  links:
    type: div
  nav|main:
    type: block
  form#search:
    type: line
  strong:
    props:
      bold: true
  svg:
    type: template
  summary:
    type: line
  toc:
    type: data
  ul:
    type: ul
templates:
  magnifying glass: c:\users\ryan\tinellbianlanguages\toplevel\data\templates\svg\magnifying glass.tpl
text:
  - <nav|main><details#menu><summary>Menu</summary>
  - <a><link>index</link>|<entry-data>root</entry-data></a>
  - '<javascript><form#search><label>term|Search: </label><input>type="text" name="term" id="term"</input><button><svg>magnifying glass</svg></button></form#search><ul><a><link>special/random_entry</link>|Random Entry</a></ul></javascript></details#menu></nav|main>'
