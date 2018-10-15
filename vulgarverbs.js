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
    const cols = 16
    let currCol = 15
    let disp = '<table><tr>';
    let expand = document.getElementById("expand");
        for (entry of arr) {
            if (++currCol == cols) {
                disp += '</tr><tr>';
                currCol = 0;
                disp += `<td>${entry[0]}&nbsp;>&nbsp;${entry[entry.length - 1]}</td>\n`;
            } else {
                disp += `<td>${entry[entry.length - 1]}</td>\n`;
            }
    }
    disp += '</tr></table>';
    document.getElementById(id).innerHTML = disp;
}
