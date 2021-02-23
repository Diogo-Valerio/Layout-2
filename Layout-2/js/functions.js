$(function(){


	var delay = 3000;
	var curIndex = 0;
	var amt;

	initSlider();
	autoPlay();

	$('.mobile-menu').click(function(){
		$('.mobile-menu').find('ul').slideToggle();
	});

	$('nav a').click(function(){
		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;

		$('html, body').animate({'scrollTop':offSetTop},);

		return false;
	});

	function initSlider(){
		amt = $('.sobre-autor').length;
		var sizeContainer = 100 * amt;
		var sizeBoxSingle = 100 / amt; 
		$('.sobre-autor').css('width', sizeBoxSingle+'%');
		$('.scroll-wraper').css('width', sizeContainer+'%');

		for (var i = 0; i < amt; i++){
			if(i == 0)
				$('.slider-bullets').append('<span style="background-color: #000;"></span>');
			else
				$('.slider-bullets').append('<span></span>');
		}
	}


	function autoPlay(){
		setInterval(function(){
			curIndex++;
			if(curIndex == amt)
			 	curIndex = 0;
			 goToSlider(curIndex);
		},delay);

	}

	function goToSlider(curIndex){
		var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;
		$('.slider-bullets span').css('background-color', '#472562');
		$('.slider-bullets span').eq(curIndex).css('background-color', '#000');
		$('.scrollEquipe').stop().animate({'scrollLeft':offSetX+'px'});
	}

	$(window).resize(function(){
		$('.scrollEquipe').stop().animate({'scrollLeft':0});
		
	});


});