
$(document).ready(function(){
    $('.navbar-nav li a').click(function(){
        $('.navbar-nav li a').removeClass("active");
        $(this).addClass("active");
    });
});

$(window).scroll(function(){
  var sticky = $('.header'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('sticky');
  else sticky.removeClass('sticky');
});

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.marginLeft = "0px";
    document.getElementById("overlay").style.display = "block";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.marginLeft = "-45px";
    document.getElementById("overlay").style.display = "none";
  }
  function closeinfo() {
      document.getElementById("info-band").style.display = "none";
  } 

  $(window).on('load', function() {
    $('#myModal').modal('show');
});


//     $('.owl-carousel').owlCarousel({
//     stagePadding: 50,
//     loop:true,
//     margin:20,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:4
//         }
//     }
// })

  $('.content-card-slider').owlCarousel({
    center: true,
    stagePadding: 50,
    loop:true,
    margin:20,
    nav:false,
    autoplay:true,
    autoplayTimeout:1500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

  $('.testimonials-slider').owlCarousel({
    center: true,
    stagePadding: 50,
    loop:true,
    margin:20,
    nav:false,
    autoplay:true,
    autoplayTimeout:1500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})


$('.owl-img-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplay:true,
    items:3,
    autoplayTimeout:1500,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


document.addEventListener('DOMContentLoaded', function() {
    const pageUpButton = document.getElementById('pageUpBtn');

    if (pageUpButton) {
        pageUpButton.addEventListener('click', function() {
            // Option 1: Scroll a specific amount (e.g., 500 pixels up)
            // window.scrollBy(0, -500); 

            // Option 2: Scroll to the top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Optional: for smooth scrolling animation
            });
        });
    }
});