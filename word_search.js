/* Goes directly to an inputted word*/

function search() {
    let text = document.getElementById("wordsearch").value
        .replace(/[A-Z]/g, letter => `$${letter.toLowerCase()}`);
    if (text == "") {
        return;
    }
    text = text.trim().replace(/[\u2019]/g, "'")
        .replace(/[\u0294\u0660]/g, "''");
    let folder = text.match(/\w/)[0];
    return `${folder}/${text}.html`;
}

function wordsearch() {
    window.location.href = "../" + search();
}

function toplevelwordsearch() {
    window.location.href = search();
}
