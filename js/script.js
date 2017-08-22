$(document).ready(function(){
	  $('.your-class').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  	  });

  	  $('.your-slider').slick({
  	  	infinite: true,
        speed: 300,
        centerPadding: '19px',
        slidesToShow: 3,
  	    centerMode: true,
  	  	arrows: true,
  	  	adaptiveHeight: true,
  	  	 	  	
  
  	  });

      $('.your-twitter').slick({
        infinite: true,
        speed: 300,
        
        slidesToShow: 1,
        
        arrows: true,
        
              
  
      });
});
	