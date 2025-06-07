$(function(){
  
  
  $('body').append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>');
$(window).on('load', function(){
  setTimeout(removeLoader, 5000); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( "#loadingDiv" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loadingDiv" ).remove(); //makes page more lightweight 
  });   
}
    
    ///////menu///////////
      $('.menu_btn').on('click', function(e) {
      e.preventDefault;
      $(this).toggleClass('menu_btn_active');
      $('.menu_ul').toggleClass('active');
      $('.messenger').toggleClass('active');
    });
       
    
    
    $(window).resize(function() {
        if($(window).width() < 992){
            $('.menu_ul').removeClass('active');
            $('.messenger').removeClass('active');
        }
    })
    
    
    //////////////////////////////////////////для изменения menu
    
    function init() {
      window.addEventListener('scroll', function(e){
          var distanceY = window.pageYOffset || document.documentElement.scrollTop,
              shrinkOn = 200,
              header = $(".logo");
              header1 = $(".menu");
          if (distanceY > shrinkOn) {
              header.addClass("smaller");
              header1.addClass("sma");
          } else {
              if (header.hasClass("smaller"), header1.hasClass("sma")) {
                  header.removeClass("smaller");
                  header1.removeClass("sma");
              }
          }
      });
  }
  window.onload = init();
    
    /////////////меню верх. вниз ////////////
    var mywindow = $(window);
    var mypos = mywindow.scrollTop();
    mywindow.scroll(function() {
        if(mywindow.scrollTop() > mypos)
        {
            $('.menu').fadeOut();  
        }
        else
        {
            $('.menu').fadeIn();
        }
        mypos = mywindow.scrollTop();
     });
    
    ////////////////////////////////////
    
    
 /*    var menu = $("#menu");
  $(window).scroll(function() {
    var top = $(this).scrollTop();
         if ( top >= 100 ) {
           menu.css(background:'green');
         } else if ( top <= 200 ) {
           menu.css(background:'red');
         }
  }); */
    
    
    //////////////////////////////////////   
    
    $('.extra-menu_open').hide();
    
    $('.extra-menu_open').hide();
        $('.hide').hide();
    
    
      $('.show').on('click',function(){
        $('.extra-menu_open').slideDown(1000);
        $('.hide').show();
        $('.show').hide();      
      }) 
      
      $('.hide').on('click',function(){
        $('.extra-menu_open').slideUp(1000);
        $('.show').show();
        $('.hide').hide();
      }) 
    
      ////////slider///////////////////////////////
      
      $('.slider .slider_sl').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000, 
      });
      
      
      
      //////////////////////////slider-2//////////////
      
      $('.brend_logo').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      });
      
      
      
      $(window).scroll(function () {
        
        //----------------кнопка верх часть - 1-------
        if($(this).scrollTop() > 2900){
            $('.header .top').fadeIn();
        }
        
        else{
            $('.header .top').fadeOut();
        }
        
    })
    //--------------------------часть - 2--------
    $('.header .top').click(function (){
        $('html, body').animate({ scrollTop:0
        }, 2000 )
    })
      
      
})