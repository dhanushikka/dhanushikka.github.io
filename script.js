$(document).ready(function() {
    
    $('.js--about-me').waypoint(function(direction){
        if(direction == "down"){
            $('nav').removeClass('disappear');
            $('nav').addClass('sticky');
           
        }
        else{
            $('nav').removeClass('sticky');
            $('nav').addClass('disappear');
        }
    }, {
    	offset: '170px;'
    });
    
    

    $('.js--scroll-to-about-me').click(function () {
       $('html, body').animate({scrollTop: $('.js--about-me').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-exp').click(function () {
       $('html, body').animate({scrollTop: $('.js--exp').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-projects').click(function () {
       $('html, body').animate({scrollTop: $('.js--projects').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-inv').click(function () {
       $('html, body').animate({scrollTop: $('.js--inv').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-skills').click(function () {
       $('html, body').animate({scrollTop: $('.js--skills').offset().top}, 1000); 
    });


    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
 
        });
      }
    }
  });

    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i')
        nav.slideToggle(200);
        
        if(icon.hasClass('fas fa-bars')){
            icon.addClass('fas fa-times')
            icon.removeClass('fas fa-bars');
            
        }
        else{
            icon.addClass('fas fa-bars');
            icon.removeClass('fas fa-times');
            
        }
        
    })

    
});           
                

                