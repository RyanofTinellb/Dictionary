let chanceBox;
let chain;
let multigraphs;
let debug;
let linenumber = 297;
const firstNullChar = 200;
let nullChar = 61952;

const textToInclude = '';

const geminate = str => str.replace(/(.)\1/g, '$1ː');
const degeminate = str => str.replace(/(.)ː/g, '$1$1');

const choose = arr => arr[Math.floor(Math.random() * arr.length)];
const unique = (item, pos, ary) => !pos || item !== ary[pos - 1];

const bracket = name => name.match(/[^a-z+-]/) ? name : `[${name}]`;

const sorted = obj =>
  Object.entries(obj).sort((a, b) => b[0].length - a[0].length);

async function fillWords(language) {
  let data = await fetch('wordlist.json');
  data = await data.json();
  data = data.filter(a => a.l == language)
    .map(a => a.t.toLowerCase())
    .filter(a => a.includes(textToInclude))
    .filter(unique);
  getElt('words').innerHTML = data.join('\n');
}

function intermediate() {
  chain = check('chain');
  numcols = window.innerWidth < 800 ? 2 : 3;
  outputArea.style.columns = chain ? 'initial' : numcols;
  outputArea.innerHTML = change();
}

function change() {
  chanceBox = check('chance') ? 1 : 0;
  multigraphs = check('multi');
  debug = check('debug');
  let rules = new Rules('rules');
  let words = getValue('words');
  words = words.map(word => new Word(word, rules));
  if (chain) {
    return words.map(word => word.etymology).join('<br>');
  } else {
    return words.map(word =>
      `<span class="abc"><span class="ghi">${word.word}</span>
       <span class="def">${word.natural}</span></span>`).join('<br>');
  }
}

class Rules {
  constructor(elt) {
    this.rules = getValue(elt);
    this.new = (name, parent) => ({
      '#': linenumber,
      name,
      parent,
      rule: [],
      chance: 0,
      repeat: false,
    });
    let ruleset = this.soundChanges = this.new();
    let name = '';
    let rule;
    this.categories = parseTables();
    this.clean = str => str.replace(/[∅]/g, '');
    this.tidy = str => str ? str.replace(/[?@*ː\uf200-\uf300]/g, '') : '';
    this.pipeOr = (match, p1) => multigraphs ? `(${p1})` : match;
    for (let line of this.rules) {
      linenumber++;
      if (!line) continue;
      [rule, name] = line.split(' // ');
      rule = rule.replace(/ /g, '').replace(/\\s/g, ' ');
      if (rule.includes('=')) {
        let [category, sounds] = rule.split('=');
        this.categories[category] = this.replaceSounds(sounds);
        continue;
      }
      if (rule.includes('{')) {
        rule = rule.slice(1);
        if (!debug) {
          let newruleset = this.new(name, ruleset);
          ruleset.rule.push(newruleset);
          ruleset = newruleset;
        }
      } else if (rule.includes('}')) {
        rule = rule.slice(0, -1);
        if (!debug) {
          ruleset.rule.push(this.makeRule(rule));
          ruleset = ruleset.parent;
          continue;
        }
      }
      ruleset.rule.push(this.makeRule(rule));
    }
    const summary = {
      sounds: this.fix(this.categories),
      rules: this.soundChanges
    };
    if (debug) summary.cats = this.categories;
  }

  fix(cats) {
    output = {}
    for (const cat in cats) {
      output[cat] = cats[cat].replace(/[?\uf200-\uf300]/g, '.');
    }
    return output;
  }

  replaceCategories(str) {
    let savedCategory = null;
    let sides = null;
    let before;
    let after;
    if (str.includes('_')) {
      [before, after] = str.split('_').map(this.replaceCategories, this);
      savedCategory = before.category || after.category || '';
      before.regex = before.regex.replace('#', '^');
      after.regex = after.regex.replace('#', '$');
      return {
        str: before.str + after.str || '',
        regex: `${before.regex}${after.regex}` || '',
        before,
        after,
        category: savedCategory
      };
    }
    let total = 0;
    let regex = str.replace(/\?/g, '.').replace(/~/, '.*?')
      .replace(/\(/g, '(?:(?:').replace(/\)/g, '))?')
      .replace(/\[(.*?),(.*?)\]/g,
        (match, p1, p2) => this.addToCats(match, p1, p2, this.categories));
    for (let [category, sounds] of sorted(this.categories)) {
      for (const star of ['*', '']) {
        regex = regex.split(category + star);
        if (regex.length > 1) {
          savedCategory = savedCategory || sounds;
          sides = sides || regex;
          total += regex.length - 1;
        }
        let soundList = multigraphs ?
          `(?:${sounds})` : `[${this.tidy(sounds)}]`;
        if (star) soundList += '+';
        regex = regex.join(`)(${soundList})(`);
      }
    }
    [before, after] = sides || [null, null];
    return {
      str: regex.replace(/[()∅]/g, ''),
      regex: `(${this.clean(regex)})`,
      i: 2 * total + 1,
      before,
      after,
      category: savedCategory
    };
  }

  addToCats(match, p1, p2, categories) {
    // add this to the category unless already exists
    if (!categories[match]) {
      let sounds = categories[bracket(p1)];
      const selection = p2.split(',').map(a => categories[bracket(a)]);
      for (const category of selection) {
        sounds = sounds.replace(/./g, a => category.includes(a) ? a : '');
      }
      categories[match] = sounds;
    }
    return match;
  }

  replaceSounds(str) {
    str = str.replace(/\[(.*?),(.*?)\]/g,
      (match, p1, p2) => this.addToCats(match, p1, p2, this.categories));
    for (let [category, sounds] of sorted(this.categories)) {
      str = str.split(category).join(sounds);
    }
    return str;
  }

  makeRule(rule) {
    let repeat = rule.includes('↻');
    if (rule.includes('%')) {
      [chance, rule] = rule.split('%');
    } else {
      chance = 100;
    }
    chance = Math.sqrt(1 - chance / 100);
    let [before, after, during] = rule.replace(/[↻]/g, '')
      .split(/[>/]/)
      .map(this.replaceCategories, this);
    let environment = this.createEnvironment(during, before);
    if (debug) console.log(linenumber, environment);
    let alter = this.factory(before, after, during);
    let regex = new RegExp(environment, 'g');
    rule = word => word.replace(regex, alter.eqn).replace(/∅/g, '');
    return {
      '#': linenumber,
      before: environment,
      after: alter.after,
      rule,
      chance,
      repeat
    };
  }

  createEnvironment(environment, before) {
    return environment ?
      `(${environment.before.regex})${before.regex}(${environment.after.regex})` :
      `()${before.regex}()`;
  }

  categoryArray(category) {
    let split = multigraphs ? '|' : '';
    return category.category.split(split);
  }

  categoryMatch() {
    let matchHash = {};
    let [before, after] = [...arguments].map(this.categoryArray, this);
    for (let i = 0; i < before.length; i++) {
      let [b, a] = [before, after].map(x => this.tidy(x[i]));
      if (a && b) matchHash[b] = a;
    }
    return matchHash;
  }

  factory(earlier, later, during) {
    console.log(earlier, later, during);
    let eqn, after, arr;
    if (later.category) {
      let matchHash;
      if (earlier.category) {
        matchHash = this.categoryMatch(earlier, later);
        let i = during ? during.before.i + 3 : 3;
        let j = i + 2;
        eqn = (...p) => {
          arr = [p[1], later.before, matchHash[p[i]], later.after, p[j]];
          if (debug) {
            console.log(2, p, `{${arr.join('|')}}`);
          }
          return arr.join('');
        }
      } else if (during.before.category) {
        matchHash = this.categoryMatch(during.before, later);
        eqn = (...p) => {
          arr = [p[1], later.before, matchHash[p[3]], later.after, p[6]];
          if (debug) {
            console.log(3, p, `{${arr.join('|')}}`);
          }
          return arr.join('');
        }
      } else {
        matchHash = this.categoryMatch(during.after, later);
        eqn = (...p) => {
          arr = [p[1], later.before, matchHash[p[6]], later.after, p[4]];
          if (debug) {
            console.log(4, p, `{${arr.join('|')}}`);
          }
          return arr.join('');
        }
      }
      after = {
        matchHash,
        str: later.str
      }
    } else {
      after = later.str;
      let i = during ? during.before.i + earlier.i + 2 : earlier.i + 2;
      eqn = (...p) => {
        arr = [p[1], after, p[i]];
        if (debug) {
          console.log(1, p, `{${arr.join('|')}}`);
        }
        return arr.join('');
      }
    }
    return {
      eqn,
      after
    };
  }
}

getElt = str => document.getElementById(str);
check = str => getElt(str).checked;
getValue = str => getElt(str).value.split('\n');

class Word {
  constructor(word, rules) {
    this.rules = rules.soundChanges.rule;
    this.lemma = () => this.word[0];
    this.hasChanged = () => this.lemma() != this.old[0];
    this.equals = str => this.lemma() == str;
    this.isNew = () => this.lemma() != this.original;
    this.skip = a => Math.random() < this.chance * chanceBox * a;
    if (word.includes('%')) {
      [this.chance, word] = word.split(/% */);
      this.chance = Math.sqrt(1 - parseInt(this.chance) / 100);
    } else {
      this.chance = Math.sqrt(0.2);
    }
    this.natural = word;
    this.etymology = [word];
    this.word = [word];
    this.reset();
    this.evolve();
  }

  update() {
    if (this.old[1] != this.word[1]) {
      this.word[0] = degeminate(this.word[1]);
    }
  }

  apply(rule) {
    if (rule instanceof Function) {
      this.word = this.word.map(rule);
    } else if (rule instanceof Array) {
      for (rule of rule) {
        this.apply(rule);
      }
    } else {
      if (this.skip(rule.chance)) return;
      do {
        this.reset();
        this.apply(rule.rule);
        this.update();
      } while (rule.repeat && this.hasChanged());
    }
  }

  reset() {
    this.word[1] = geminate(this.word[0]);
    this.old = this.word.slice();
  }

  evolve() {
    for (let rule of this.rules) {
      this.original = this.lemma();
      this.apply(rule);
      if (this.isNew()) this.etymology.push(this.lemma());
    }
    this.etymology = this.etymology.join(' > ');
    this.word = this.lemma();
  }
}

function parseTables() {
  let sounds = {};
  const tables = document.getElementsByClassName('alphabet');
  for (const table of tables) {
    parseTable(table, sounds);
  }
  return sounds;
}

function parseTable(table, sounds) {
  let colnames = [];
  let rownames = [];
  let tablename = table.tHead.rows[0].cells[0].textContent;

  // Parse THead
  for (const row of table.tHead.rows) {
    let index = 0;
    for (const cell of row.cells) {
      if (!cell.cellIndex && !row.rowIndex) continue;
      const text = cell.textContent;
      for (let i = 0; i < cell.colSpan; i++) {
        if (!colnames[index]) colnames[index] = [];
        if (text) colnames[index].push(cell.textContent);
        index++;
      }
    }
  }

  // Parse TBody
  rownum = 0;
  for (const row of table.tBodies[0].rows) {
    colnum = 0;
    for (const cell of row.cells) {
      if (cell.tagName == 'TH') {
        const text = cell.textContent;
        for (let i = 0; i < cell.rowSpan; i++) {
          const index = rownum + i;
          if (!rownames[index]) rownames[index] = [];
          if (text) rownames[index].push(text);
        }
      } else {
        const text = cell.textContent || String.fromCharCode(nullChar++);
        for (rowname of rownames[rownum]) {
          push(sounds, rowname, text);
        }
        for (colname of colnames[colnum]) {
          push(sounds, colname, text);
        }
        push(sounds, tablename, text);
        colnum++;
      }
    }
    rownum++;
  }
}

function push(sounds, name, text) {
  name = bracket(name);
  if (!multigraphs) {
    if (!sounds[name]) sounds[name] = '';
    sounds[name] += text;
  } else {
    if (sounds[name]) {
      sounds[name] += `|${text}`;
    } else {
      sounds[name] = text;
    }
  }
  console.log(sounds);
}
