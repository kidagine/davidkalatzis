// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1|| document.documentElement.scrollTop > 1) {
    document.getElementById("header").style.top = "0";
    } else {
    document.getElementById("header").style.top = "-50px";
    }
}