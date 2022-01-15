// All Popup (Click outside popup close)
window.onclick = function(event) {
    if (event.target == popMessage) {
        popMessage.style.display = "none";
    }
    else if (event.target == popSuccess) {
        popSuccess.style.display = "none";
    }
}

// Popup (Message)
var popMessage          = document.getElementById("popMessage");
var buttonMessage       = document.getElementById("buttonMessage");
var close               = popMessage.getElementsByClassName("close")[0];
var submit              = popMessage.getElementsByClassName("submit")[0];
var cancel              = popMessage.getElementsByClassName("cancel")[0];
buttonMessage.onclick   = function() { popMessage.style.display = "flex"; }
close.onclick           = function() { popMessage.style.display = "none"; }
submit.onclick          = function() { popMessage.style.display = "none"; }
cancel.onclick          = function() { popMessage.style.display = "none"; }

// Popup (Success)
var popSuccess          = document.getElementById("popSuccess");
var buttonSuccess       = document.getElementById("buttonSuccess");
var submit              = popSuccess.getElementsByClassName("submit")[0];
buttonSuccess.onclick   = function() { popSuccess.style.display = "flex"; }
submit.onclick          = function() { popSuccess.style.display = "none"; }