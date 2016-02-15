$(document).ready(function(){

    // Gallery slick
   $('.gallery__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    cssEase: 'ease-in-out',
    speed: 400,
    accessibility: false,
    arrows: false,
    asNavFor: '.gallery__thumb-list'
  });
  $('.gallery__thumb-list').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.gallery__list',
    dots: false,
    cssEase: 'ease-in-out',
    speed: 400,
    centerMode: true,
    accessibility: false,
    arrows: false,
    centerPadding: '100px',
    focusOnSelect: true
  });


    // Relax - tabs - jquery
  $('.relax__tab a').on('click', function(e){
    e.preventDefault();
    $(this)
      .closest('.relax')
      .find('.relax__tab--active')
      .removeClass('relax__tab--active');
    $(this)
      .closest('.relax__tab')
      .addClass('relax__tab--active');
    $(this)
      .closest('.relax')
      .find('.relax__inner--active')
      .removeClass('relax__inner--active')
      .hide();
    $( $(this.hash) ).fadeIn(300, function(){
      $(this).addClass('relax__inner--active');
    });
  });


    // Offers - tabs - jquery
  $('.offer__tab a').on('click', function(e){
    e.preventDefault();
    $(this)
      .closest('.offer')
      .find('.offer__tab--active')
      .removeClass('offer__tab--active');
    $(this)
      .closest('.offer__tab')
      .addClass('offer__tab--active');
    $(this)
      .closest('.offer')
      .find('.offer__slide--active')
      .removeClass('offer__slide--active')
      .hide();
    $( $(this.hash) ).fadeIn(400, function(){
      $(this).addClass('offer__slide--active');
    });
  });



});
