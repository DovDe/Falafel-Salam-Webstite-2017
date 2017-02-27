$(document).ready(function(){
  
  
 if (window.matchMedia('(min-width: 769px)').matches)  {
         
    // do functionality on screens larger than 768px
      $(".carousel-container").load('html/carousel.html');  
         
        }else {
       $('.subnav').hide();
        }
  
  
 $( window ).resize(function() {
   
       if (window.matchMedia('(min-width: 769px)').matches)  {
         
    // do functionality on screens smaller than 768px
       $(".carousel-container").load('html/carousel.html');
             $('.subnav').show();
   
       
        
        } else {
         $('.subnav').hide();

          
          if ($(".carousel-container")) {
           $("#myCarousel").remove(); 
            
          }
        }
  
}); 
  
  
});







  
  


