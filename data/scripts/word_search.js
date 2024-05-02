/* Goes directly to an inputted word*/
console.log(MARKDOWN);


function search() {
    let text = document.getElementById('wordsearch').value;
    if (text == '') {
        return;
    }
    return createUrl(text);
}

function findInitial(text) {
    return text.replace(/&.*?;|\W/g, '').charAt(0).toLowerCase();
}

function createUrl(text) {
    return `${text}.html`
}

function sellCaps(text) {
    return text.replace(/[A-Z]/g, letter => `$${letter.toLowerCase()}`)
        .replace(' ', '.');
}

function markdown(text) {
    for (md in MARKDOWN) {
        text = text.replace(md, MARKDOWN[md]);
    }
    return text;
}

function wordsearch() {
    let term = search();
    let lex = window.location.href.includes('lex') ? '' : 'lex/';
    if (term) {
        window.location.href = lex + term;
    }
}

function toplevelwordsearch() {
    let term = search();
    if (term) {
        window.location.href = term;
    }
}
