randomEntry();

const SEARCH = 'searching.json';

function createUrl(text) {
    return `${sellCaps(text)}.html`
}

const mapString = (str, fn) =>
    str.split('')
        .map((c, i) => fn(c, i, str))
        .join('');

// Changes space to period, and adds dollar-signs before capitals
const sellLetterCaps = letter =>
    letter == letter.toLowerCase() ? 
    letter == ' ' ? '.' : letter : `$${letter.toLowerCase()}`

function sellCaps(text) {
    return mapString(text, sellLetterCaps);
}

async function randomEntry() {
    let data = await fetch('../data/assets/wordlist.json');
    data = await data.json();
	data = Object.values(data);
    let rand = data[Math.floor(Math.random() * data.length)].t;
    window.open('/lex/' + createUrl(rand), '_self');
}
