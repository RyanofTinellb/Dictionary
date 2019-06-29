let categories;
let chanceBox;
let chain;

async function fillWords(language, count) {
    words = document.getElementById('words');
    let data = await fetch('wordlist.json');
    data = await data.json();
    data = data.filter(a => a.l == language);
    let wordList = [];
    for (let i = 0; i < count; i++) {
        wordList.push(data[Math.floor(Math.random() * data.length)].t);
    }
    console.log(wordList);
    words.innerHTML = wordList.join('\n');
}

function change() {
    console.clear();
    let rules = document.getElementById('rules').value.split('\n');
    let words = document.getElementById('words').value.split('\n');
    chanceBox = document.getElementById('chance').checked ? 1 : 0;
    let soundChanges = [];
    categories = {};
    for (let rule of rules) {
        if (rule == '') continue;
        rule = rule.replace(/ /g, '').replace(/\\s/g, ' ');
        if (rule.includes('=')) {
            [category, sounds] = replaceSounds(rule).split('=');
            categories[category] = sounds;
        } else {
            soundChanges.push(replacement(rule));
        }
    }
    return words.map(word => {
        let chance;
        if (word.includes('%')) {
            [chance, word] = word.split(/% */)
        } else {
            chance = '80';
        }
        chance = 1 - parseInt(chance) / 100;
        let wordList = [word];
        let old;
        let dupword;
        let olddup;
        for (soundChange of soundChanges) {
            if (Math.random() < chance * soundChange.chance * chanceBox) continue;
            original = word;
            do {
                old = word;
                olddup = dupword = addGeminate(word);
                word = soundChange.rule(word);
                dupword = soundChange.rule(dupword);
                if (olddup != dupword) word = removeGeminate(dupword);
            } while (soundChange.repeat && old != word);
            if (original != word) wordList.push(word);
        }
        return chain ? wordList.join(' > ') : word;
    }).join('<br>');
}

addGeminate = str => str.replace(/(.)\1/g, '$1ː');
removeGeminate = str => str.replace(/(.)ː/g, '$1$1');

function replaceSounds(str) {
    for (let [category, sounds] of Object.entries(categories)) {
        str = str.split(category).join(sounds);
    }
    return str;
}

function replaceCategories(str) {
    for (let [category, sounds] of Object.entries(categories)) {
        str = str.split(category).join(`[${sounds}]`);
    }
    return str;
}

clean = str => str.replace(/[∅]/g, '');

function createEnvironment(environment, before) {
    before = `(${clean(before)})`;
    return environment ? `(${clean(environment).replace(/\(/g, '(?:')
                   .replace(/\)/g, ')*')
                   .replace(/#$/, '$')
                   .replace(/^#/, '^')
                   .replace('_', `)${before}(`)})` :
        `()${before}()`;
}

findCategory = str => clean(str.match(/\[(.*?)\]/)[1]);

function categoryMatch(arr) {
    output = {};
    [before, after] = arr.map(findCategory);
    for (let i = 0; i < before.length; i++) {
        output[before.charAt(i)] = after.charAt(i);
    }
    return output;
}

function replacement(rule) {
    repeat = rule.includes('↻');
    if (rule.includes('%')) {
        [chance, rule] = rule.split('%');
    } else {
        chance = 100;
    }
    chance = 1 - chance / 100;
    let [before, after, environment] = rule.replace(/[↻]/g, '').split(/[>/]/);
    environment = replaceCategories(createEnvironment(environment, before));
    [before, after] = [before, after].map(replaceCategories);
    console.log('before:', environment);
    after = clean(after);
    let alter = factory(before, after);
    let regex = new RegExp(environment, 'g');
    let runRegex = word => word.replace(regex, alter).replace(/∅/g, '');
    return {
        rule: runRegex,
        chance,
        repeat
    }
}

factory = (before, after) => {
    if (after.includes('[')) {
        let matchHash = categoryMatch([before, after]);
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

function intermediate() {
    chain = document.getElementById('chain').checked;
    outputArea.style.columns = chain ? 'initial' : 3;
    outputArea.innerHTML = change();
}
