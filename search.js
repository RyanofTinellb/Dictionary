const URL = 'wordlist.json';
const BACKUP_URL = 'searching.json';
const QUERY = window.location.href.split('?')[1];
const SEARCH = document.getElementById('term');
const RESULTS = document.getElementById('results');
const LOWER = word => word.toLowerCase()
const MARKDOWN = {
    '&rsquo;': "'",
    '&#x294;': "''",
    '&uuml;': '!u',
    '&ecirc;': '()e',
    '&igrave;': ')i',
    '&middot;': '..',
    '&nbsp;': ' ',
    '&#x157;': ',r',
    '&#x14d;': '_o'
};


if (window.location.href.indexOf('?') != -1) {
    RESULTS.innerHTML = 'Searching...';
    search();
}

async function search() {
    let data = await fetch(URL);
    data = await data.json();
    let terms = getTerms();
    if (!terms) {
        results = '';
    } else {
        place(terms);
        results = [collate, pos_lang, lang_def]
                   .map(fn => display(fn(data, terms.map(LOWER))))
                   .sort((a, b) => a.length - b.length)
                   .filter(entry => entry.length)
                   .join('');
    }
    if (results.length) {
        RESULTS.innerHTML = results;
    } else {
        backupSearch(terms);
    }
}

async function backupSearch(terms) {
    let data = await fetch(BACKUP_URL);
    data = await data.json();
    if (!terms.length) {
        return;
    } else if (terms.length == 1) {
        arr = oneTermSearch(data, terms);
    } else {
        arr = multiTermSearch(data, terms);
    }
    RESULTS.innerHTML = backupDisplay(arr, data, terms);
}

function capitalise(string) {
    if (string.length == 0) {
        return ''
    }
    if (string.startsWith('&rsquo;')) {
        return string.replace('&rsquo;', '&#x294;');
    } else {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

function backupDisplay(pages, data, terms) {
    terms = terms.map(markdown);
    let regexes = terms.map(term =>
            RegExp(`(${term}|${capitalise(term)})`, 'g'));
    return `${
    !arr.length ? 'No matching entries found.' :
         `<ul>${pages.map(page => {
            let pagenum = page.page;
            let link = data.urls[pagenum];
            let name = data.names[pagenum];
            let lines = page.lines.map(
                linenum => highlight(regexes, data.sentences[linenum]));
            return `<li><a href="${link}">${name}</a>: ${
                lines.join(' &hellip; ')}</li>`;
    }).join('')}</ul>`}`;
}

function highlight(terms, line) {
    terms.forEach(term => {
        line = line.replace(term, '<strong>$1</strong>');
    });
    return line;
}

function unique(arr) {
    return arr.filter(
        (item, pos, ary) => !pos || item !== ary[pos - 1]
    );
}

function uniquePageNumbers(pages) {
    return pages.map(page => {
        page.lines = unique(page.lines.sort());
        return page;
    });
}

function multiTermSearch(arr, terms) {
    let pages = [].concat(...terms.map(term => oneTermSearch(arr, term)));
    pages.sort((a, b) => a.page - b.page);
    let output = [];
    let current = undefined;
    for (let page of pages) {
        if (current && page.page === current.page) {
            current.lines.push(...page.lines);
            current.count++;
        } else {
            if (current) { output.push(current); }
            current = {page: page.page, lines: page.lines, count: 1};
        }
    }
    output = uniquePageNumbers(output);
    return output.filter(page => page.count === terms.length);
}

function oneTermSearch(arr, term) {
    pages = arr.terms[term];
    text = [];
    for (page in pages) {
        text.push({
            page: parseInt(page),
            lines: pages[page].map(line => parseInt(line))
        });
    }
    return text;
}


function place(terms) {
    SEARCH.value = terms.join(' ');
}

function pos_lang(data, terms) {
    terms = terms.map(term => term.toLowerCase());
    for (let term of terms) {
        let arr = data.filter(entry => entry.p.includes(term));
        if (!arr.length) {
            arr = data.filter(entry => language(entry).includes(term));
        }
        data = arr;
        if (!data.length) {
            return data;
        }
    }
    return data;
}

function lang_def(data, terms) {
    terms = terms.map(term => term.toLowerCase());
    for (let term of terms) {
        data = data.filter(entry => entry.d.map(
            word => clean(markdown(word.toLowerCase()))
        ).includes(term) || language(entry).includes(term));
        if (!data.length) {
            return data;
        }
    }
    return data;
}

function language(entry) {
    return entry.l.toLowerCase().split(' ');
}

function collate(data, terms) {
    return data.filter(entry =>
        includesAll(clean_split(entry.t), terms));
}

function clean(text) {
    return text.toLowerCase().replace(/[^a-z' ]/g, '');
}

function clean_split(text) {
    return clean(markdown(text.toLowerCase())).split(' ')
}

function includesAll(entry, terms) {
    return terms.every(term => entry.includes(term));
}

function includesSome(entry, terms) {
    return terms.some(term => entry.includes(term));
}

function display(entries) {
    if (entries.length) {
        return `<ul>${entries.map(createLine).join('')}</ul>`;
    } else {
        return ''
    }
}

function createLine(entry) {
    return `<li><a href="${createUrl(entry.t)}">${entry.t}</a> `
        + `(${entry.l}) `
        + `<em>${entry.m}</em></li>`;
}

function findInitial(text) {
    return text.replace(/&.*?;/g, '').charAt(0).toLowerCase();
}

function createUrl(text) {
    return `${findInitial(text)}/${sellCaps(markdown(text))}.html`
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

function getTerms() {
    const MARKUP = ["%E2%80%99", "'",
        "%c3%bb", "$u",
        "%c9%a8", "\u0268",
        "%C9%A8", "\u0268",
        "%27", "'",
        "\u0294", "''",
        "\u00ec", "$e",
        "%28", "(",
        "%29", ")",
        "%c5%97", ",r",
        "%20", "+",
        "%24", "$",
        "%25", "%",
        "%3b", " ",
        "%26", "&",
        "%2cr", ",r"
    ];
    let text = '';
    for (const elt of QUERY.split('&')) {
        query = elt.split('=');
        if (query[0] == 'term') {
            text = removeTrailingPlus(query[1]);
        }
    }
    for (let i = 0; i < MARKUP.length; i++) {
        text = text.split(MARKUP[i]).join(MARKUP[++i]);
    }
    return text.split("+").filter(i => i != "");
}

function removeTrailingPlus(string) {
    return string.slice(-1) == '+' ? string.slice(0, -1) : string;
}
