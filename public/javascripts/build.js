// Custom JavaScript
function preparePage() {
document.getElementById("box").onclick = function() {
if ( document.getElementById("box").className == "boxC") {
     document.getElementById("box").className = "boxCg";

      } else {
         document.getElementById("box").className = "boxC";
      }
   };
}

window.onload = function() {
    preparePage();
}
