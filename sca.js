let chanceBox;
let chain;

const geminate = str => str.replace(/(.)\1/g, '$1ː');
const degeminate = str => str.replace(/(.)ː/g, '$1$1');

const choose = arr => arr[Math.floor(Math.random() * arr.length)];
const unique = (item, pos, ary) => !pos || item !== ary[pos - 1];

async function fillWords(language, count) {
    let data = await fetch('wordlist.json');
    data = await data.json();
    data = data.filter(a => a.l == language)
        .map(a => a.t)
        .filter(unique)
        .filter(a => a.includes('ittika'));
    getElt('words').innerHTML = data.join('\n');
}

class Rules {
    constructor(elt) {
        this.rules = getValue(elt);
        this.new = parent => ({
            parent,
            rule: [],
            chance: 0,
            repeat: false
        });
        let ruleset = this.soundChanges = this.new();
        this.categories = {};
        this.clean = str => str.replace(/[∅]/g, '');
        this.replaceCategories = str => this.replaceThings(str, true);
        this.replaceSounds = str => this.replaceThings(str, false);
        this.findCategory = str => this.clean(str.match(/\[(.*?)\]/)[1]);
        for (let rule of this.rules) {
            rule = rule.replace(/ /g, '').replace(/\\s/g, ' ');
            if (rule.includes('=')) {
                let [category, sounds] = rule.split('=');
                this.categories[category] = this.replaceSounds(sounds);
                continue;
            }
            if (rule.includes('{')) {
                rule = rule.slice(1);
                let newruleset = this.new(ruleset);
                ruleset.rule.push(newruleset);
                ruleset = newruleset;
            } else if (rule.includes('}')) {
                rule = rule.slice(0, -1);
                ruleset.rule.push(this.makeRule(rule));
                ruleset = ruleset.parent;
                continue;
            }
            ruleset.rule.push(this.makeRule(rule));
        }
        console.log({
            sounds: this.categories,
            rules: this.soundChanges
        });
    }

    replaceThings(str, brackets) {
        for (let [category, sounds] of Object.entries(this.categories)) {
            sounds = brackets ? sounds : sounds.replace(/\*/g, '');
            str = str.split(category).join(brackets ? `[${sounds}]` : sounds);
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
        chance = 1 - chance / 100;
        let [before, after, during] = rule.replace(/[↻]/g, '')
            .split(/[>/]/)
            .map(this.replaceCategories);
        let environment = this.createEnvironment(during, before);
        after = this.clean(after);
        let alter = this.factory(before, after, during, environment);
        let regex = new RegExp(environment, 'g');
        rule = word => word.replace(regex, alter.eqn).replace(/∅/g, '');
        return {
            before: environment,
            after: alter.after,
            rule,
            chance,
            repeat
        };
    }

    createEnvironment(environment, before) {
        before = `(${this.clean(before)})`;
        return environment ? `(${this.clean(environment).replace(/\(/g, '(?:')
                       .replace(/\)/g, ')*')
                       .replace(/#$/, '$')
                       .replace(/^#/, '^')
                       .replace('_', `)${before}(`)})` :
            `()${before}()`;
    }

    categoryMatch(arr) {
        output = {};
        let [before, after] = arr.map(this.findCategory);
        for (let i = 0; i < before.length; i++) {
            output[before.charAt(i)] = after.charAt(i);
        }
        return output;
    }

    factory(earlier, later, during, environment) {
        let eqn, after;
        if (later.includes('[')) {
            let matchHash;
            if (earlier.includes('[')) {
                matchHash = this.categoryMatch([earlier, later]);
                eqn = (match, p1, p2, p3) => {
                    let index = earlier.indexOf('[');
                    p2 = later.replace(/\[.*?\]/, matchHash[p2[index]]);
                    return `${p1}${p2}${p3}`;
                };
            } else {
                matchHash = this.categoryMatch([during, later])
                let indices = ['_', '['].map(s => during.indexOf(s));
                let difference = indices[1] - indices[0];
                if (difference < 0) {
                    eqn = (match, p1, p2, p3) => {
                        let index = indices[1];
                        p2 = later.replace(/\[.*?\]/, matchHash[p1[index]]);
                        return `${p1}${p2}${p3}`
                    }
                } else {
                    eqn = (match, p1, p2, p3) => {
                        let index = difference - 1;
                        p2 = later.replace(/\[.*?\]/, matchHash[p3[index]]);
                        return `${p1}${p2}${p3}`
                    }
                }
            }
            after = {
                hash: matchHash,
                after: later
            }
        } else {
            eqn = (match, p1, p2, p3) => `${p1}${later}${p3}`;
            after = later;
        }
        return {
            eqn,
            after
        };
    }
}

getElt = str => document.getElementById(str);
getValue = str => getElt(str).value.split('\n').filter(a => a);

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
            this.chance = 1 - parseInt(this.chance) / 100;
        } else {
            this.chance = 0.2;
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
            do {
                this.reset();
                this.apply(rule.rule);
                this.update();
                console.log(rule);
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
            if (this.skip(rule.chance)) continue;
            this.apply(rule);
            if (this.isNew()) this.etymology.push(this.lemma());
        }
        this.etymology = this.etymology.join(' > ');
        this.word = this.lemma();
    }
}

function change() {
    console.clear();
    chanceBox = getElt('chance').checked ? 1 : 0;
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
    chain = getElt('chain').checked;
    outputArea.style.columns = chain ? 'initial' : 3;
    outputArea.innerHTML = change();
}
