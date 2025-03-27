var BASE_URL = '/data/assets/wordlist.json';    // can be overriden
var BACKUP_URL = '/data/assets/searching.json'; // by 404 search
const SEARCH = document.getElementById('search');
const TERM = document.getElementById('term');
const RESULTS = document.getElementById('results');
const LOWER = word => word.toLowerCase()
const LANGUAGES = [
    'english', 'lulani', 'high', 'demotic', 'fezhle', 'early', 'late', 'koine',
    'ptokan', 'old', 'middle', 'standard', 'brequen', 'pre-brequen', 'archaic',
    'common', 'zhaladi', 'proto', 'contemporary', 'reformed', 'tsarin',
    'classical', 'modern', 'solajin', 'ancient', 'medieval', 'traditional', 'new'
]

searchParams = new URLSearchParams(window.location.search);
let terms = searchParams.get('term');
if (terms) {
    RESULTS.innerHTML = 'Searching...';
    SEARCH.value = terms
    search(terms.split(' '));
}

async function search(terms) {
    let data;
    let results;
    if (!terms) {
        results = '';
    } else {
        data = await fetch(BASE_URL);
        data = await data.json();
        results = [translit, pos_lang, def_lang, native_script]
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
    let regexes = terms.map(term =>
        RegExp(`(${esc(term)}|${capitalise(esc(term))})`, 'g'));
    return `${!arr.length ? 'No matching entries found.' :
            `<ul>${pages.map(page => {
                let pagenum = page.page;
                let link = data.urls[pagenum];
                let name = data.pages[pagenum];
                let lines = page.lines.map(
                    linenum => boldterms(regexes, data.lines[linenum]));
                return `<li><a href="${backupUrl(link)}">${name}</a>: ${lines.join(' &hellip; ')}</li>`;
            }).join('')}</ul>`}`;
}

function backupUrl(link) {
    return '/' + link
}

function boldterms(terms, line) {
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
        if (!term) {
            return [];
        }
        data = data.filter(entry => entry.d.split(/[ ;]/).map(
            word => word.toLowerCase()
        ).includes(term) ||
            (quote ? false : language(entry).includes(term)));
        if (!data.length) {
            break;
        }
    }
    return data;
}

function native_script(data, terms) {
    for (let term of terms) {
        data = data.filter(entry => entry.n == term);
        if (!data.length) {
            break;
        }
    }
    return data;
}

const language = entry => entry.l.toLowerCase().split(' ');

const translit = (data, terms) => data.filter(entry =>
    includesAll(entry.t.split(' ').map(word => word.toLowerCase().replace('-', '')), terms.map(word => word.toLowerCase().replace('-', ''))));


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
    let language = entry.l.toLowerCase().split(' ').map(lang => lang.charAt(0)).join('');
    // language = language == 'english' ? 'en' : 'x-tlb-' + language.split(' ').map(lang => lang.charAt(0)).join('');

    return `<li><a href="../lex/${createUrl(entry.t)}">${entry.t}</a> `
        + (entry.n ? `<span class="tinellbian" lang="${language}">${entry.n}</span> ` : '')
        + `(${entry.l}) `
        + `<em>${entry.d}</em></li>`;
}


function createUrl(text) {
    return createPlainUrl(text);
}

function createPlainUrl(text) {
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

const sellCaps = text => mapString(text, sellLetterCaps);