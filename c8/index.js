var slide = document.querySelector('.slide');
var marginPosition = 0;

setInterval(function(){
	if(marginPosition > -1290){
		marginPosition = marginPosition - 430;
		slide.style.marginTop = marginPosition + 'px';
	} else {
		marginPosition = 0;
		slide.style.marginTop = 0;
	}
}, 1500);