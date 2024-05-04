const BASE_URL = '../data/assets/wordlist.json';
const BACKUP_URL = '../data/assets/searching.json';
const HREF = window.location.href;
const QUERY = HREF.split('?')[1];
const SEARCH = document.getElementById('term');
const RESULTS = document.getElementById('results');
const LOWER = word => word.toLowerCase()
const MARKDOWN = {
    '’': "'",
    'ʔ': "''",
    'á': '(a',
    'ü': '!u',
    'û': '()u',
    'ê': '()e',
    'í': '(i',
    'ì': ')i',
    '·': '..',
    '&nbsp;': ' ',
    'ŗ': ',r',
    'ō': '_o',
    'Ṭ': ')T'
};
const LANGUAGES = [
    'english', 'lulani', 'high', 'demotic', 'fezhle', 'early', 'late', 'koine',
    'ptokan', 'old', 'middle', 'standard', 'brequen', 'pre-brequen', 'archaic',
    'common', 'zhaladi', 'proto', 'contemporary', 'reformed', 'tsarin',
    'classical', 'modern', 'solajin', 'ancient', 'medieval', 'traditional', 'new'
]

if (HREF.indexOf('?') != -1 &&
    HREF.toLowerCase().indexOf('search') != -1) {
    RESULTS.innerHTML = 'Searching...';
    const terms = getTerms();
    place(terms);
    search(terms);
}

async function search(terms) {
    let data;
    let results;
    if (!terms) {
        results = '';
    } else {
        data = await fetch(BASE_URL);
        data = await data.json();
        results = [translit, pos_lang, def_lang]
            .map(fn => display(fn(data, terms)))
            .filter(entry => entry.length)
            .sort((a, b) => a.length - b.length)
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

function esc(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function backupDisplay(pages, data, terms) {
    terms = terms.map(markdown);
    let regexes = terms.map(term =>
        RegExp(`(${esc(term)}|${capitalise(esc(term))})`, 'g'));
    return `${!arr.length ? 'No matching entries found.' :
            `<ul>${pages.map(page => {
                let pagenum = page.page;
                let link = data.urls[pagenum];
                let name = data.pages[pagenum];
                let lines = page.lines.map(
                    linenum => highlight(regexes, data.lines[linenum]));
                return `<li><a href="${backupUrl(link)}">${name}</a>: ${lines.join(' &hellip; ')}</li>`;
            }).join('')}</ul>`}`;
}

function backupUrl(link) {
    return link
}

function highlight(terms, line) {
    terms.forEach(term => {
        line = line.replace(term, '<b>$1</b>');
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
            current = { page: page.page, lines: page.lines, count: 1 };
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

function pos_lang(data, terms, back) {
    terms = terms.map(keep_hyphen);
    let totalLength = data.length;
    if (includesAll(LANGUAGES, terms)) {
        return [];
    }
    for (let term of terms) {
        let neg = term.charAt(0) == '-' ? a => !a : a => a;
        term = term.replace(/^-/, '');
        let arr = data.filter(entry => neg(entry.p.split(' ').includes(term)));
        if (!arr.length || arr.length == data.length) {
            arr = data.filter(entry => neg(language(entry).includes(term)));
        }
        if (!arr.length && !back) {
            return pos_lang(data, terms.reverse(), true)
        } else {
            data = arr;
        }
    }
    if (data.length == totalLength) {
        return [];
    }
    return data;
}

function def_lang(data, terms) {
    terms = terms.map(keep_quotes);
    for (let term of terms) {
        quote = term.search('"') != -1;
        term = term.replace(/"/g, '');
        data = data.filter(entry => entry.d.split(' ').map(
            word => word.toLowerCase()
        ).includes(term) ||
            (quote ? false : language(entry).includes(term)));
        if (!data.length) {
            return data;
        }
    }
    return data;
}

function language(entry) {
    return entry.l.toLowerCase().split(' ');
}

function translit(data, terms) {
    return data.filter(entry =>
        includesAll(entry.t.split(' '), terms));
}

function keep_quotes(text) {
    return text.toLowerCase().replace(/[^a-z'" ]/g, '');
}

function keep_hyphen(text) {
    return text.toLowerCase().replace(/[^a-z-' ]/g, '')
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
    return `<li><a href="../lex/${createUrl(entry.t)}">${entry.t}</a> `
        + `(${entry.l}) `
        + `<em>${entry.d}</em></li>`;
}

function findInitial(text) {
    text = markdown(text);
    return text.replace(/&.*?;|\W/g, '').charAt(0).toLowerCase();
}

function createUrl(text) {
    return createPlainUrl(text);
}

function createPlainUrl(text) {
    return `${findInitial(text)}/${sellCaps(text)}.html`
}

dollarise = (letter) =>
    letter == letter.toLowerCase() ? letter : `$${letter.toLowerCase()}`

function sellCaps(text) {
    return text.replace(/./g, dollarise)
        .replace(' ', '.');
}

function markdown(text) {
    for (md in MARKDOWN) {
        text = text.split(md).join(MARKDOWN[md])
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
        "%2cr", ",r",
        '%22', '"'
    ];
    let text = '';
    for (const elt of QUERY.split('&')) {
        query = elt.split('=');
        if (query[0] == 'term') {
            text = removeTrailingPlus(query[1]).split('#')[0];
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
