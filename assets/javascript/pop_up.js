
var modal = document.getElementById("myModal");

var btn = document.getElementById("userLike");
var searchBtn = document.getElementById("searchBar");

var googleSearch = document.getElementById("gcse");
var userEmail = document.getElementById("email");
var likes = document.getElementById("userLikeSaved");

var span = document.getElementsByClassName("close")[0];
 
btn.onclick = function() {
    modal.style.display = "block";
    userEmail.style.display = "block";
    likes.style.display = "block";
    googleSearch.style.display = "none";
}

searchBtn.onclick = function() {
	modal.style.display = "block";
	googleSearch.style.display = "block";
	likes.style.display = "none";
	userEmail.style.display = "none";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}