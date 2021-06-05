(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 
 

  // Episodes Slider
  $(".all-episodes").owlCarousel({
    loop: true,
    margin: 10,
    items: 3,
    navText: [
      '<i class="fal fa-long-arrow-left"></i>',
      '<i class="fal fa-long-arrow-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
  // Features Slider
  $(".all-features").owlCarousel({
    loop: true,
    margin: 0,
    items: 2,
    navText: [
      '<i class="fal fa-long-arrow-left"></i>',
      '<i class="fal fa-long-arrow-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      992: {
        items: 2
      }
    }
  });
  // Testimonail Slider
  $(".all-Hosts").owlCarousel({ 
    margin: 0,
    items: 4,
    navText: [
      '<i class="fal fa-long-arrow-left"></i>',
      '<i class="fal fa-long-arrow-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 4
      }
    }
  });
  // Blog Slider
  $(".all-blog").owlCarousel({ 
    margin: 15,
    items: 3,
    navText: [
      '<i class="fal fa-long-arrow-left"></i>',
      '<i class="fal fa-long-arrow-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });



  $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
          $(".scrollToTop:hidden").stop(true, true).fadeIn();
      } else {
          $(".scrollToTop").stop(true, true).fadeOut();
      }
  });
  $(function () {
      $(".scroll").click(function () {
          $("html,body").animate({ scrollTop: $(".top").offset().top }, "1000");
          return false;
      });
  });




  let btn  = document.querySelectorAll('.getSearch');
  let sbox = document.querySelector('.search-area');
  btn.forEach(SBtn=> {
      SBtn.addEventListener('click', () => {
          sbox.classList.toggle('active')
      })
  })
 
 
})(jQuery);
