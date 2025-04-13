randomEntry();

const SEARCH = 'searching.json';

function createUrl(text) {
    return `${sellCaps(text)}.html`
}

async function randomEntry() {
    let data = await fetch('../data/assets/wordlist.json');
    data = await data.json();
	data = Object.values(data);
    let rand = data[Math.floor(Math.random() * data.length)].t;
    window.open('/lex/' + createUrl(rand), '_self');
}
