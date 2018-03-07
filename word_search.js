/* Goes directly to an inputted word*/

function search() {
	var text;
	var folder;
	var first_letter;
	text = document.getElementById("wordsearch").value.toLowerCase();
	if (text == "") {return;}
	text = text.trim().replace(/[\u2019]/g, "'")
	text = text.replace(/[\u0294\u0660]/g, "''")
	for (var i = 0; i < text.length; i++) {
		first_letter = text.charCodeAt(i);
	}
	if (text.startsWith("'") || text.startsWith("-")) {
		folder = text.charAt(1);
	} else {
		folder = text.charAt(0);
	}
		return folder + "/" + text + ".html"
}

function wordsearch() {
	window.location.href = "../" + search();
}

function toplevelwordsearch() {
	window.location.href = search();
}
