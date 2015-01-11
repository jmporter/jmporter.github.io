
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    //>=, not <=
    if (scroll >= 1) {
      //clearHeader, not clearheader - caps H
      $(".cbp-af-header").addClass("line");
      console.log("hey");
    }
    if($(window).scrollTop() === 0) {
      //clearHeader, not clearheader - caps H
      $(".cbp-af-header").removeClass("line");
    }
  }); //missing );
  //your code here
});
