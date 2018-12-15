if (window.location.href.indexOf('?') != -1) {
    adv_search();
}

const MARKDOWN = {
    '&rsquo;': "'",
    '&#x294;': "",
    '&uuml;': '!u'
};

async function adv_search() {
    document.getElementById('results').innerHTML = 'Searching...';
    let data = await fetch('wordlist.json');
    data = await data.json();
    let terms = getTerms();
    place(terms)
    display(filterArray(data, terms), 'results', 'results');
}

function filterArray(entries, terms) {
    return entries.filter(
        entry =>
            entry.l.includes(terms.lang) &&
            entry.t.includes(terms.entry) &&
            (terms.npos == '' || includesNone(entry.p, terms.npos)) &&
            (terms.def == '' || includesAll(entry.d, terms.def)) &&
            (terms.pos == '' || includesAll(entry.p, terms.pos))
    );
}

function includesAll(entry, terms) {
    return terms.split('+').every(term => entry.includes(term));
}

function includesNone(entry, terms) {
    return !(terms.split('+').some(term => entry.includes(term)));
}

function place(queries) {
    queries.forEach(query => {
        const term = queries[query].replace(/\+/g, ' ');
        if (term != '') {
            document.getElementById(query).value = term;
        }
    });
}

function getTerms() {
    let arr = {};
    for (const elt of window.location.href.split('?')[1].split('&')) {
        query = elt.split('=');
        arr[query[0]] = removeTrailingPlus(query[1]);
    }
    return arr;
}

function removeTrailingPlus(string) {
    return string.slice(-1) == '+' ? string.slice(0, -1) : string;
}

function display(entries, id) {
    if (entries.length == 0) {
        document.getElementById(id).innerHTML = '<br>No matching entries found';
        return;
    }
    document.getElementById(id).innerHTML =
        `<ol>${entries.map(createLine).join('')}</ol>`;
}

function createLine(entry) {
    return `<li><a href='${createUrl(entry.t)}'>${entry.t}</a> `
        + `(${entry.l}) `
        + `<em>${entry.p.join(' ')}</em> `
        + `<strong>${entry.m}</strong></li>`;
}

function findInitial(text) {
    return text.replace(/&.*?;/g, '').charAt(0).toLowerCase();
}

function createUrl(text) {
    return `${findInitial(text)}/${markdown(text)}.html`
}

function sellCaps(text) {
    return text.replace(/^[A-Z]/g, letter => `$${letter.toLowerCase()}`)
}

function markdown(text) {
    for (md in MARKDOWN) {
        text = text.replace(md, MARKDOWN[md]);
    }
    return sellCaps(text);
}
