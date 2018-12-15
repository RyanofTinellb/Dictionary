async function colloquiallulani() {
    let data = await fetch('colloquiallulani.json');
    data = await data.json();
    display(data, "results");
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
    return arr.map(
        entry => `<li>${entry[entry.length - 1]} &lt; ${entry[0]}</li>\n`
    ).join('\n');
}
