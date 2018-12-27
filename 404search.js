URL = '/wordlist.json';
BACKUP_URL = '/searching.json';

base();

function base() {
    RESULTS.innerHTML = 'Searching...';
    if (window.location.href.indexOf('?') == -1) {
        search(getTermfrom404);
    } else {
        search(getTerms);
    }
}

function getTermfrom404() {
    /* searches for the term after the final slash of the url, without the .html ending */
    let terms = HREF.split('/');
    let term = terms[terms.length - 1]
    if (term == 'index.html') {
        term = terms[terms.length - 2];
    } else {
        try {
            term = term.split('.html')[0];
        } catch (err) {}
    }
    return term.split(/\%20|\./);
}

function backupUrl(link) {
    return '/' + link;
}

function createUrl(text) {
    return '/' + createPlainUrl(text);
}
