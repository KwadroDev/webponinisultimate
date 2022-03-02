$(document).ready(function() {

  $(window).scroll(function(){
      if($(this).scrollTop() > 40){
          $('.gotoup').fadeIn();
      } else{
          $('.gotoup').fadeOut();
      }
  });

    $(".gotoup").click(function() {
        $('html, body').animation({scrollTop : 0},800);
    });
});