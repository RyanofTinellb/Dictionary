let categories;

function change() {
    console.clear();
    let rules = document.getElementById('rules').value.split('\n');
    let words = document.getElementById('words').value.split('\n');
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
                repeat: rule.includes('&')
            });
        }
    }
    return words.map(word => {
        let old;
        for (soundChange of soundChanges) {
            do {
                old = word;
                word = soundChange.rule(word);
            } while (soundChange.repeat && old != word);
        }
        return word;
    }).join('<br>');
    // return words.join('<br>');
}

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

clean = str => str.replace(/[ː∅]/g, '');

createEnvironment = (environment, before) => {
    let geminate = before.includes('ː') ? '\\2' : ''
    before = `(${clean(before)})${geminate}`;
    return environment ? `(${clean(environment).replace(/\(/g, '(?:')
                   .replace(/\)/g, ')*')
                   .replace('_', `)${before}(`)})`
                : `()${before}()`;
}


function categoryMatch(before, after) {
    output = {};
    [before, after] = [before, after].map(str => categories[clean(str)]);
    if (before && after) {
        for (let i = 0; i < before.length; i++) {
            output[before.charAt(i)] = after.charAt(i);
        }
    }
    return output;
}

function replacement(rule) {
    // [-palatal] > [+palatal] / _C(C)i >> [/([tdnlsh])/, function dull]
    // [tdnlsh]
    // [cjnlxh]
    //
    // ()([+palatal])(C(?:C)i)
    // ()([tdnlsh])([bnklmnspw](?:[bnklmnspw])i)
    let [before, after, environment] = rule.replace(/[&]/g, '').split(/[>/]/);
    environment = replaceCategories(createEnvironment(environment, before));
    console.log(environment);
    if (categories[after]) {
        let matchHash = categoryMatch(before, after);
        console.log(matchHash);
        var alter = (match, p1, p2, p3) => `${p1}${matchHash[p2]}${p3}`;
    } else {
        console.table(after);
        var alter = (match, p1, p2, p3) => `${p1}${clean(after)}${p3}`;
    }
    let regex = new RegExp(environment, 'g');
    let runRegex = word => word.replace(regex, alter).replace(/∅/g, '');
    return runRegex;
}
