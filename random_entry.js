randomEntry();

function randomEntry() {
	var url = "searching.json";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var text = JSON.parse(this.responseText);
      var rand = text['urls'][Math.floor(Math.random() * text['urls'].length)];
      window.open(rand, '_self');
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}
