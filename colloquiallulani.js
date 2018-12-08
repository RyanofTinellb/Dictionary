function colloquiallulani() {
    var url = "colloquiallulani.json";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var text = JSON.parse(this.responseText);
            display(text, "results");
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function display(arr, id) {
    let expand = document.getElementById("expand").checked;
    document.getElementById(id).innerHTML = `<ol>${
        (expand ? joinedList : firstToLast)(arr)
    }</ol>`;
}

function joinedList(arr) {
    return arr.map(entry => `<li>${entry.join(' > ')}</li>`).join('\n');
}

function firstToLast(arr) {
    return arr.map(entry =>
        `<li>${entry[entry.length - 1]} &lt; ${entry[0]}</li>\n`
    ).join('\n');
}
