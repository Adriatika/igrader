$(document).ready(function(){
	var articleHeight 	= $('.singleArticle').height();//высота статьи
	var offset 			= articleHeight/100*10; //вычисление высоты прокрутки
	var up 				= $('#upArrow');// поиск элемента\кнопки "вверх"
	var mainHeight		= $('main').outerHeight();
	var headerHeight	= $('.graderHeader').outerHeight()+32;
	var allHeight		= headerHeight + mainHeight;
	var x = (articleHeight>3500)? (articleHeight+400):articleHeight;

	$(window).scroll(function(){
		if(($(window).scrollTop() >= headerHeight) && ($(window).scrollTop()< x)){
			up.fadeIn(750);
		} else{
			up.fadeOut(150);
		};
	});
	up.on('click', function(e){
			e.preventDefault();
			var kff = allHeight*0.07;
			$('html, body').animate({scrollTop:0}, kff);
	});
	function vpSize(){
		return $(window).width();
	}	
	});


	
