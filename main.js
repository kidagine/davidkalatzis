
// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 1|| document.documentElement.scrollTop > 1) {
//     document.getElementById("navbar").style.left = "0";
//     } else {
//     document.getElementById("navbar").style.left = "-65px";
//     }
// }

$('.barra-nivel').each(function() {
    var valorLargura = $(this).data('nivel');
    var valorNivel = $(this).html("<span class='valor-nivel'>"+valorLargura+"</span>");
      $(this).animate({
          width: valorLargura
      });
  });

  