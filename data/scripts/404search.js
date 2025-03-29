BASE_URL = '/data/assets/wordlist.json';
BACKUP_URL = '/data/assets/searching.json';
GET = elt => document.getElementsByTagName(elt)[0]

base();

function base() {
    let terms;
    if (window.location.href.indexOf('?') == -1) {
        terms = getTermfrom404();
        document.getElementById("term").value = terms;
    } else {
        terms = getTerms();
    }
    let word = terms.join(' ');
    GET('title').innerHTML = `${word} - The Tinellbian Languages Dictionary`;
    GET('h1').innerHTML = word;
    search(terms);
}

function getTermfrom404() {
    /* searches for the term after the final slash of the url, without the .html ending */
    let terms = window.location.pathname.split('/');
    let term = terms[0];
    if (term == 'index.html') {
        term = terms[terms.length - 2];
    } else {
        try {
            term = term.split('.html')[0];
        } catch (err) {}
    }
    return decodeURI(term).split(/\%20|\./);
}

function backupUrl(link) {
    return '/' + link;
}

function createUrl(text) {
    return createPlainUrl(text);
}
