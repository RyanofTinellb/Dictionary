let categories;

async function fillWords() {
    words = document.getElementById('words');
    let data = await fetch('wordlist.json');
    data = await data.json();
    data = data.filter(a => a.l == 'High Lulani');
    let wordList = [];
    for (let i = 0; i < 5; i++) {
        wordList.push(data[Math.floor(Math.random() * data.length)].t);
    }
    console.log(wordList);
    words.innerHTML = wordList.join('\n');
}

function change() {
    console.clear();
    let rules = document.getElementById('rules').value.split('\n');
    let words = document.getElementById('words').value.split('\n');
    let chain = document.getElementById('chain').checked;
    let soundChanges = [];
    categories = {};
    for (let rule of rules) {
        rule = rule.replace(/ /g, '').replace(/\\s/g, ' ');
        if (rule.includes('=')) {
            [category, sounds] = replaceSounds(rule).split('=');
            categories[category] = sounds;
        } else {
            soundChanges.push({
                rule: replacement(rule),
                repeat: rule.includes('↻')
            });
        }
    }
    return words.map(word => {
        let wordList = [word];
        let old;
        let dupword;
        let olddup;
        for (soundChange of soundChanges) {
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
        return chain? wordList.join(' > ') : word;
    }).join('<br>');
}

addGeminate = str => str.replace(/(.)\1/, '$1ː');
removeGeminate = str => str.replace(/(.)ː/, '$1$1');

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

createEnvironment = (environment, before) => {
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
    let [before, after, environment] = rule.replace(/[↻]/g, '').split(/[>/]/);
    environment = replaceCategories(createEnvironment(environment, before));
    [before, after] = [before, after].map(replaceCategories);
    console.log('before:', environment);
    after = clean(after);
    let alter = factory(before, after);
    let regex = new RegExp(environment, 'g');
    let runRegex = word => word.replace(regex, alter).replace(/∅/g, '');
    return runRegex;
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
