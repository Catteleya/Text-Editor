document.getElementById("heading").innerHTML =
  localStorage["title"] || "Title"; // default text
document.getElementById("heading-sub-text").innerHTML =
  localStorage["title-sub-text"] || "Heading Sub-Text"; // default text
document.getElementById("content").innerHTML =
  localStorage["text"] || "Sub-Text [inf]"; // default text

setInterval(function() {
  // fuction that is saving the innerHTML of the div
  localStorage["title"] = document.getElementById("heading").innerHTML; // heading div
  localStorage["text"] = document.getElementById("content").innerHTML; // content div
}, 1000);
const sub = document.getElementById('example-btn');

sub.addEventListener('click', () => {
  window.open('https://example.com', '_blank');
});
