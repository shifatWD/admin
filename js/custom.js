$(document).ready(function(){

  // banner ripels
  $('#banner').ripples({
    resolution: 800,
    dropRadius: 20,
    perturbance: 0.01,
  });
  
  // wow js===========
  new WOW().init();


  // mixitup==========
    var mixer = document.querySelector('.tabs-btn');
    var mixer = mixitup('.tabs-btn');

  // type js==========
  var typed3 = new Typed('#typed3', {
    strings: ['Designer', 'Freelancer', 'Developer'],
    typeSpeed: 25,
    backSpeed: 25,
    backDelay: 2500,
    smartBackspace: true,
    loop: true
  });

  // sticky navbar===========
  window.addEventListener('scroll', function(){
    var nav = document.querySelector('nav')
    nav.classList.toggle('sticky', window.scrollY > 0)
  })

  // testimonial slik slider
  $('.testi-slider').slick({
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    speed: 200,
    nextArrow: '<i class="fa-solid fa-angle-right prev"></i>',
    prevArrow: '<i class="fa-solid fa-angle-left next"></i>',
  })

  // testimonial counterUp 
  $('.counter').counterUp({
    delay: 10,
    time: 5000
});







})

    
  




