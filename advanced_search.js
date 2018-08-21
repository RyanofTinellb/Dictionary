if (window.location.href.indexOf("?") != -1) {
    adv_search();
}

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
            (terms.npos == "" || !(terms.npos.split("+").map(npos =>
                entry.p.includes(npos))
                    .reduce((acc, curr) => acc || curr))) &&
            (terms.def == "" || terms.def.split("+").map(def =>
                entry.d.includes(def))
                    .reduce((acc, curr) => acc && curr)) &&
            (terms.pos == "" || terms.pos.split("+").map(pos =>
                entry.p.includes(pos))
                    .reduce((acc, curr) => acc && curr))
    );
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
        arr[query[0]] = query[1];
    }
    return arr;
}

// capitalises first letter
function capitalise(string) {
    if (string.length == 0) {
        return ""
    }
    if (string.startsWith("&rsquo;")) {
        return string.replace("&rsquo;", "&#x294;");
    } else {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

// displays results as list
// @param Array arr: results array
function display(entries, id) {
    if (entries.length == 0) {
        document.getElementById(id).innerHTML = "<br>No matching entries found";
        return;
    }
    var text = "<ol>"
    const MARKDOWN = {
        "&rsquo;": "'",
        "&#x294;": "''"
    }
    for (var entry of entries) {
        if (entry.t.charAt(0) == "&") {
            var initial = entry.t.charAt(7);
        } else {
            var initial = entry.t.charAt(0);
        }
        let url = entry.t;
        for (md in MARKDOWN) {
            url = url.replace(md, MARKDOWN[md]);
        }
        text += `<li><a href="${initial}/${url}.html">${entry.t}</a> (${entry.l}) <em>${entry.p.join(" ")}</em> <strong>${entry.m}</strong></li>`;
    }
    text += "</ol>";
    document.getElementById(id).innerHTML = text;
}
