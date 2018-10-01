function vulgarverbs() {
    var url = "vulgarverbs.json";
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

// displays results as list
// @param Array arr: results array
function display(arr, id) {
    let disp = '<ol>';
    let expand = document.getElementById("expand");
        for (entry of arr) {
            disp += `<li>${entry[0]} > ${entry[entry.length - 1]}</li>\n`;
    }
    disp += '</ol>';
    document.getElementById(id).innerHTML = disp;
}
