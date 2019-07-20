let chanceBox;
let chain;
let mutigraphs;
let debug;
let linenumber = 130;

const geminate = str => str.replace(/(.)\1/g, '$1ː');
const degeminate = str => str.replace(/(.)ː/g, '$1$1');

const choose = arr => arr[Math.floor(Math.random() * arr.length)];
const unique = (item, pos, ary) => !pos || item !== ary[pos - 1];

async function fillWords(language) {
  let data = await fetch('wordlist.json');
  data = await data.json();
  data = data.filter(a => a.l == language)
    .map(a => a.t)
    .filter(unique);
  console.log(data);
  getElt('words').innerHTML = data.join('\n');
}

class Rules {
  constructor(elt) {
    this.rules = getValue(elt);
    this.new = parent => ({
      '#': linenumber,
      parent,
      rule: [],
      chance: 0,
      repeat: false,
    });
    let ruleset = this.soundChanges = this.new();
    this.categories = {};
    this.clean = str => str.replace(/[∅]/g, '');
    this.tidy = str => str ? str.replace(/[*ː]/g, '') : '';
    this.pipeOr = (match, p1) => multigraphs ? `(${p1})` : match;
    for (let rule of this.rules) {
      linenumber++;
      if (!rule) continue;
      rule = rule.replace(/ /g, '').replace(/\\s/g, ' ');
      if (rule.includes('=')) {
        let [category, sounds] = rule.split('=');
        this.categories[category] = this.replaceSounds(sounds);
        continue;
      }
      if (rule.includes('{')) {
        rule = rule.slice(1);
        if (!debug) {
          let newruleset = this.new(ruleset);
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
    console.log({
      sounds: this.categories,
      rules: this.soundChanges
    });
  }

  replaceCategories(str) {
    let savedCategory = null;
    let before = null;
    let after = null;
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
      .replace(/\(/g, '(?:(?:').replace(/\)/g, '))?');
    for (let [category, sounds] of Object.entries(this.categories)) {
      regex = regex.split(category);
      if (regex.length > 1) {
        savedCategory = sounds;
        [before, after] = regex;
        total += regex.length - 1;
      }
      sounds = multigraphs ? sounds : `[${this.tidy(sounds)}]`;
      regex = regex.join(`)(${sounds})(`);
    }
    return {
      str: regex.replace(/[()]/g, ''),
      regex: `(${regex})`,
      i: 2 * total + 1,
      before,
      after,
      category: savedCategory
    };
  }

  replaceSounds(str) {
    for (let [category, sounds] of Object.entries(this.categories)) {
      sounds = this.tidy(sounds);
      str = str.split(category).join(sounds);
    }
    return geminate(str);
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
    after.str = this.clean(after.str);
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
    return words.map(word => word.word).join('<br>');
  }
}

function intermediate() {
  chain = check('chain');
  outputArea.style.columns = chain ? 'initial' : 3;
  outputArea.innerHTML = change();
}
