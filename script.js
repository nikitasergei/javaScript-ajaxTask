window.onload = function () {
  var searchButton = document.getElementById("search-button");
  var responseDiv = document.getElementById("container-for-response");
  searchButton.onclick = function () {
    var f = document.getElementById("filmName");
    var fName = f.value.split(" ");
    var film = "";
    for (var i = 0; i < fName.length; i++) {
      if (i === fName.length - 1) {
        film = film + fName[i];
      } else film = film + fName[i] + "+";
    }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "http://www.omdbapi.com/?apikey=a6e6005f&t=" + film, false);
    xhr.send();
    if (xhr.responseText.split("\"")[1] === "Response") {
      alert("Movie is not found!")
    } else {
      var json = xhr.responseText.split("\"");
      for (var j = 0; j < json.length; j++) {
        if (json[j] === "Title") {
          alert(json[j] + json[j + 1] + json[j + 2]);
        }
      }
    }
  }

};