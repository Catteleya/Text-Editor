document.getElementById("heading").innerHTML =
  localStorage["title"] || "Title"; // default text
document.getElementById("content").innerHTML =
  localStorage["text"] || "Subtext [inf]"; // default text

setInterval(function() {
  // fuction that is saving the innerHTML of the div
  localStorage["title"] = document.getElementById("heading").innerHTML; // heading div
  localStorage["text"] = document.getElementById("content").innerHTML; // content div
}, 1000);

function featured{
  alert("This is still being developed + no one has submitted for featured content :c");
}
