let chanceBox;
let chain;

async function fillWords(language, count) {
    let data = await fetch('wordlist.json');
    data = await data.json();
    data = data.filter(a => a.l == language);
    getElt('words').innerHTML = choices(count, data).join('\n');
}

choose = arr => arr[Math.floor(Math.random() * arr.length)];
choices = (count, data) => Array(count).fill().map(i => choose(data).t)

class Rules {
    constructor(elt) {
        this.rules = getValue(elt);
        this.soundChanges = [];
        this.categories = {};
        this.clean = str => str.replace(/[∅]/g, '');
        this.replaceCategories = str => this.replaceThings(str, true);
        this.replaceSounds = str => this.replaceThings(str, false);
        this.findCategory = str => this.clean(str.match(/\[(.*?)\]/)[1]);
        for (let rule of this.rules) {
            rule = rule.replace(/ /g, '').replace(/\\s/g, ' ');
            if (rule.includes('=')) {
                let [category, sounds] = this.replaceSounds(rule).split('=');
                this.categories[category] = sounds;
            } else {
                this.replace(rule);
            }
        }
    }

    replaceThings(str, brackets) {
        for (let [category, sounds] of Object.entries(this.categories)) {
            str = str.split(category).join(brackets ? `[${sounds}]` : sounds);
        }
        return str;
    }

    replace(rule) {
        let repeat = rule.includes('↻');
        if (rule.includes('%')) {
            [chance, rule] = rule.split('%');
        } else {
            chance = 100;
        }
        chance = 1 - chance / 100;
        let [before, after, environment] = rule.replace(/[↻]/g, '').split(/[>/]/);
        environment = this.createEnvironment(environment, before);
        [before, after] = [before, after].map(this.replaceCategories);
        console.log('before:', environment);
        after = this.clean(after);
        let alter = this.factory(before, after);
        let regex = new RegExp(environment, 'g');
        let runRegex = word => word.replace(regex, alter).replace(/∅/g, '');
        this.soundChanges.push({
            rule: runRegex,
            chance,
            repeat
        });
    }

    createEnvironment(environment, before) {
        before = `(${this.clean(before)})`;
        environment = environment ? `(${this.clean(environment).replace(/\(/g, '(?:')
                       .replace(/\)/g, ')*')
                       .replace(/#$/, '$')
                       .replace(/^#/, '^')
                       .replace('_', `)${before}(`)})` :
            `()${before}()`;
        return this.replaceCategories(environment);
    }

    categoryMatch(arr) {
        output = {};
        let [before, after] = arr.map(this.findCategory);
        for (let i = 0; i < before.length; i++) {
            output[before.charAt(i)] = after.charAt(i);
        }
        return output;
    }

    factory(before, after) {
        if (after.includes('[')) {
            let matchHash = this.categoryMatch([before, after]);
            console.log('hash:', matchHash, 'after:', after);
            return (match, p1, p2, p3) => {
                p2 = after.replace(/\[.*?\]/, matchHash[p2[before.indexOf('[')]]);
                return `${p1}${p2}${p3}`;
            };
        } else {
            console.log('after:', after);
            return (match, p1, p2, p3) => `${p1}${after}${p3}`;
        }
    }
}

getElt = str => document.getElementById(str);
getValue = str => getElt(str).value.split('\n');

class Word {
    constructor(word, rules) {
        this.word = word;
        this.rules = rules.soundChanges;
        this.addGeminate = str => str.replace(/(.)\1/g, '$1ː');
        this.removeGeminate = str => str.replace(/(.)ː/g, '$1$1');
        this.skip = (a, b, c) => Math.random() < a * b * c;
        if (word.includes('%')) {
            [this.chance, this.word] = word.split(/% */);
            this.chance = 1 - parseInt(this.chance) / 100;
        } else {
            this.chance = 0.2;
        }
        this.etymology = [word];
        this.evolve(rules);
    }

    evolve() {
        for (let rule of this.rules) {
            if (this.skip(this.chance, rule.chance, chanceBox)) continue;
            this.original = this.word;
            do {
                this.old = this.word;
                this.olddup = this.dupword = this.addGeminate(this.word);
                this.word = rule.rule(this.word);
                this.dupword = rule.rule(this.dupword);
                if (this.olddup != this.dupword) {
                    this.word = this.removeGeminate(this.dupword);
                }
            } while (rule.repeat && this.old != this.word);
            if (this.original != this.word) this.etymology.push(this.word);
        }
        this.etymology = this.etymology.join(' > ');
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
