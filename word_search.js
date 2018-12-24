/* Goes directly to an inputted word*/
const MARKDOWN = {
    '&rsquo;': "'",
    '&#x294;': "''",
    '&uuml;': '!u',
    '&ecirc;': '()e',
    '&igrave;': ')i',
    '&middot;': '..',
    '&nbsp;': '.',
    '&#x157;': ',r',
    '&#x14d;': '_o'
};


function search() {
    let text = document.getElementById("wordsearch").value;
    if (text == "") {
        return;
    }
    return createUrl(text);
}

function findInitial(text) {
    return text.replace(/&.*?;/g, '').charAt(0).toLowerCase();
}

function createUrl(text) {
    return `${findInitial(text)}/${sellCaps(markdown(text))}.html`
}

function sellCaps(text) {
    return text.replace(/[A-Z]/g, letter => `$${letter.toLowerCase()}`)
}

function markdown(text) {
    for (md in MARKDOWN) {
        text = text.replace(md, MARKDOWN[md]);
    }
    return text;
}

function wordsearch() {
    let search = search();
    if (search) {
        window.location.href = "../" + search();
    }
}

function toplevelwordsearch() {
    let search = search();
    if (search) {
        window.location.href = search();
    }
}
