$(function(){

//SLIDER
    $(".weekly_products__inner").slick({
      prevArrow: '<button type="button" class="slick-prev"><img src="images/right.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="images/right.png"></button>'
    });


  //RATE
  $(".rate__stars").rateYo({
    rating: 5.9,
    readOnly: true,
    starWidth: "14px"
  });

  
 

});