$(document).ready(function(){
	
	$('.relax__tab a').on('click', function(e){
		e.preventDefault();
		$(this).closest('.relax__tabs').find('.relax__tab--active').removeClass('relax__tab--active');
		$(this).closest('.relax__tab').addClass('relax__tab--active');

		// $(this).closest('.relax').find('.relax__inner--active').removeClass('relax__inner--active');	
		// $( $(this).attr( 'href') ).fadeIn(300, 'linear', )	
	});
});


