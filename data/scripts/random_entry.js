randomEntry();

const SEARCH = 'searching.json';
const createUrl = text => `/lex/${sellCaps(text)}.html`
const sellCaps = text => mapString(text, sellLetterCaps);
const mapString = (str, fn) => 
    str.split('').map((c, i) => fn(c, i, str)).join('');

// Changes space to period, and adds dollar-signs before capitals
const sellLetterCaps = letter =>
    letter == letter.toLowerCase() ? 
    letter == ' ' ? '.' : letter : `$${letter.toLowerCase()}`


async function randomEntry() {
    let data = await fetch('/data/assets/wordlist.json');
    data = await data.json();
	data = Object.values(data);
    let rand = data[Math.floor(Math.random() * data.length)].t;
    window.open(createUrl(rand), '_self');
}
