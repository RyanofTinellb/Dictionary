randomEntry();

const SEARCH = 'searching.json';

const MARKDOWN = {
    '&rsquo;': "'",
    '&#x294;': "''",
    '&uuml;': '!u'
};

function markdown(text) {
    for (md in MARKDOWN) {
        text = text.replace(md, MARKDOWN[md]);
    }
    return sellCaps(text);
}

function findInitial(text) {
    return text.replace(/&.*?;|\W/g, '').charAt(0).toLowerCase();
}

function createUrl(text) {
    return `${findInitial(text)}/${markdown(text)}.html`
}

function sellCaps(text) {
    return text.replace(/^[A-Z]/g, letter => `$${letter.toLowerCase()}`)
}

async function randomEntry() {
    let data = await fetch('wordlist.json');
    data = await data.json();
	data = Object.values(data);
    let rand = data[Math.floor(Math.random() * data.length)].t;
    window.open(createUrl(rand), '_self');
}
