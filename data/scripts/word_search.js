/* Goes directly to an inputted word*/


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
    return `${sellCaps(text)}.html`
}

const mapString = (str, fn) =>
    str.split('')
       .map((c, i) => fn(c, i, str))
       .join('');

const sellLetterCaps = letter => letter ==
    letter.toLowerCase() ? letter : `$${letter.toLowerCase()}`

function sellCaps(text) {
    return mapString(text, sellLetterCaps)
}

function markdown(text) {
    for (md in MARKDOWN) {
        text = text.replace(md, MARKDOWN[md]);
    }
    return text;
}

function wordsearch() {
    let term = search();
    if (term) {
        window.location.href = '/lex/' + sellCaps(term);
    }
}

// function toplevelwordsearch() {
//     console.log('ultra')
//     let term = search();
//     if (term) {
//         window.location.href = sellCaps(term);
//     }
// }
