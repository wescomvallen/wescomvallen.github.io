document.getElementById("hide-sidebar").addEventListener("click", function() {
	document.getElementById("nav-sidebar").style.display = "none";
	document.getElementById("show-sidebar").style.visibility = "visible";
});
document.getElementById("show-sidebar").addEventListener("click", function() {
	document.getElementById("nav-sidebar").style.display = "flex";
	document.getElementById("show-sidebar").style.visibility = "hidden";
});