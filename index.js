// Payment Info
function paymentInfo() {
    var paymentInfo = document.getElementById('paymentInfo');
    var infoIcon = document.getElementById('infoIcon');
    if (paymentInfo.classList.contains('hide'))
        { paymentInfo.className = 'paymentInfo itemV width show';
            infoIcon.className = 'icon black rotateB'; }
    else { paymentInfo.className = 'paymentInfo itemV width hide';
            infoIcon.className = 'icon black rotateF'; }}

// Popup (Success)
function popSuccess() {
    var popSuccess  = document.getElementById("popSuccess");
    var submit      = popSuccess.getElementsByClassName("submit")[0];
    submit.onclick  = function() { popSuccess.style.display = "none"; }
    window.onclick  = function(event) { if (event.target == popSuccess) { popSuccess.style.display = "none"; }}
    popSuccess.style.display = "flex"; }

// Popup (Refund)
function popRefund() {
    var popRefund   = document.getElementById("popRefund");
    var close       = popRefund.getElementsByClassName("close")[0];
    var submit      = popRefund.getElementsByClassName("submit")[0];
    close.onclick   = function() { popRefund.style.display = "none"; }
    submit.onclick  = function() { popRefund.style.display = "none"; }
    window.onclick  = function(event) { if (event.target == popRefund) { popRefund.style.display = "none"; }}
    popRefund.style.display = "flex"; }

// Popup (Info)
function popInfo() {
    var popInfo     = document.getElementById("popInfo");
    var close       = popInfo.getElementsByClassName("close")[0];
    var submit      = popInfo.getElementsByClassName("submit")[0];
    close.onclick   = function() { popInfo.style.display = "none"; }
    submit.onclick  = function() { popInfo.style.display = "none"; }
    window.onclick  = function(event) { if (event.target == popInfo) { popInfo.style.display = "none"; }}
    popInfo.style.display = "flex"; }

// Popup (Credit)
function popCredit() {
    var popCredit   = document.getElementById("popCredit");
    var close       = popCredit.getElementsByClassName("close")[0];
    var submit      = popCredit.getElementsByClassName("submit")[0];
    close.onclick   = function() { popCredit.style.display = "none"; }
    submit.onclick  = function() { popCredit.style.display = "none"; }
    window.onclick  = function(event) { if (event.target == popCredit) { popCredit.style.display = "none"; }}
    popCredit.style.display = "flex"; }