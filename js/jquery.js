$('.slide-one-item-alt').owlCarousel({
   loop:true,
   margin:10,
   nav:false,
   mouseDrag: false,
   autoplay:true,
    autoplayTimeout:5000,
    smartSpeed: 500,
//    autoplaySpeed: 1000,
   responsive:{
       0:{
           items:1
       },
       600:{
           items:1
       },
       1000:{
           items:1
       }
   }
});

$('.testimonial-slide').owlCarousel({
    loop: true,
    nav: false,
    mouseDrag: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 200,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
 });


var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})


$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('nav').addClass('nav-white');
    }
    else{
        $('nav').removeClass('nav-white');
    }
})


$(window).on('scroll',function(){
    if($(window).scrollTop() > 100){
        $('nav').addClass('nav-height');
    }
    else{
        $('nav').removeClass('nav-height');
    }
})