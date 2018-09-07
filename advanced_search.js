if (window.location.href.indexOf("?") != -1) {
    adv_search();
}

const MARKDOWN = {
    "&rsquo;": "'",
    "&#x294;": "''"
};

function adv_search() {
    document.getElementById("results").innerHTML = "Searching...";
    var url = "wordlist.json";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var text = JSON.parse(this.responseText);
            var terms = getTerms();
            place(terms);
            display(filterArray(text, terms), "results");
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function filterArray(entries, terms) {
    return entries.filter(
        entry =>
            entry.l.includes(terms.lang) &&
            entry.t.includes(terms.entry) &&
            (terms.npos == "" || includesNone(entry.p, terms.npos)) &&
            (terms.def == "" || includesAll(entry.d, terms.def)) &&
            (terms.pos == "" || includesAll(entry.p, terms.pos))
    );
}

function includesAll(entry, terms) {
    return terms.split("+").map(pos => entry.includes(pos))
                           .reduce((acc, curr) => acc && curr);
}

function includesNone(entry, terms) {
    return !(terms.split("+").map(npos => entry.includes(npos))
                             .reduce((acc, curr) => acc || curr));
}

// places terms into textboxes
function place(queries) {
    for (const query in queries) {
        const term = queries[query].replace(/\+/g, " ");
        if (term != "") {
            document.getElementById(query).value = term;
        }
    }
}

// returns array of terms
function getTerms() {
    let arr = {};
    for (const elt of window.location.href.split("?")[1].split("&")) {
        query = elt.split("=");
        arr[query[0]] = removeTrailingPlus(query[1]);
    }
    return arr;
}

function removeTrailingPlus(string) {
    return string.slice(-1) == '+' ? string.slice(0, -1) : string;
}

// displays results as list
// @param Array arr: results array
function display(entries, id) {
    if (entries.length == 0) {
        document.getElementById(id).innerHTML = "<br>No matching entries found";
        return;
    }
    document.getElementById(id).innerHTML =
        `<ol>${entries.map(createLine).join("")}</ol>`;
}

function createLine(entry) {
    return `<li><a href="${createUrl(entry.t)}.html">${entry.t}</a> `
        + `(${entry.l}) `
        + `<em>${entry.p.join(" ")}</em> `
        + `<strong>${entry.m}</strong></li>`;
}

function findInitial(text) {
    return text.replace(/&.*?;/g, "").charAt(0);
}

function createUrl(text) {
    return `${findInitial(text)}/${markdown(text)}.html`
}

function markdown(text) {
    for (md in MARKDOWN) {
        text = text.replace(md, MARKDOWN[md]);
    }
    return text;
}
