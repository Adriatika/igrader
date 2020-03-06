		/*Вырезание формы из сайдбара и врезка в всплывающий wrapper*/
	var upFrom 	= document.querySelector("#pp"),
		close 	= document.querySelector("#ppCl"),
		popupW 	= document.querySelector(".popupWrapper"),
		popupF 	= document.querySelector("#ppForm"); 
		upFrom.onclick = function(e){
			e.preventDefault();
			var formD	= document.querySelector("#sp-form-127936");
			var spWrap 	= document.querySelector(".sp-form-outer") ;
			popupF.append(formD);
			popupW.style.display="block";
			popupF.style.display="block";  
		}
		close.onclick=function(){
			var formD	= document.querySelector("#sp-form-127936");
			var spWrap 	= document.querySelector(".sp-form-outer") ;
			popupW.style.display="none";	
			popupF.style.display="none";	
			spWrap.appendChild(formD);
		}
		popupW.onclick = function(){
			var formD	= document.querySelector("#sp-form-127936");
			var spWrap 	= document.querySelector(".sp-form-outer") ;
			popupW.style.display="none";
			popupF.style.display="none";	
			spWrap.appendChild(formD);		
		}
		 $(this).keydown(function(e){
		 	if(e.which == 27){
			var formD	= document.querySelector("#sp-form-127936");
			var spWrap 	= document.querySelector(".sp-form-outer") ;
              		popupW.style.display="none";
					popupF.style.display="none";	
					spWrap.appendChild(formD);
				}
     			});
		 var rightArrow = document.querySelector('#sliderRight'),
		 	leftArrow 	= document.querySelector('#sliderLeft') ,
		 	sliderList 	= document.querySelector('.sliderAns__list'),
		 	sliderItems = document.querySelectorAll('.sliderAns__item'),
		 	divSlide 	= document.querySelector(".sliderAns");
		 	sliderOffset  = 0,
		 	change 		=275, 
		 	windowWidth = document.querySelector('html').offsetWidth,
		 	theWidth = -1700;
		 	sliderList.style.left =0;
		 	if(windowWidth<=576 && windowWidth>480){
		 		change = 330;
		 		theWidth = -2800;
		 	}else if(windowWidth<=480){
		 			divSlide.style.width="320px";
		 			divSlide.style.margin="0 auto 1.5em";
		 			change = 324;	
		 			theWidth = -2800;
		 			leftArrow.style.width="35px";
		 			rightArrow.style.width="35px";
		 			rightArrow.style.right="-10px";
		 			for(z = 0; z<sliderItems.length; z++){
		 				sliderItems[z].style.margin="0 35px 0 35px";

		 			}
		 		}
		 	
		 	rightArrow.onclick = function(){
		 		if(sliderOffset >= theWidth){
		 			rightArrow.style.opacity = 1;	
		 			leftArrow.style.opacity = 1;	 			
		 			sliderOffset = sliderOffset - change;
		 			sliderList.style.left = sliderOffset+'px';
		 	}else{
		 		rightArrow.style.opacity = 0.5;
		 	}
		 	}
		 	leftArrow.onclick = function(){
		 		if(sliderOffset < 0){
		 			rightArrow.style.opacity = 1;
		 			leftArrow.style.opacity = 1;
			 		sliderOffset = sliderOffset + change;
			 		sliderList.style.left = sliderOffset+'px';
		 	}else{
		 		leftArrow.style.opacity = 0.5;
		 	}
		 	}

	});
