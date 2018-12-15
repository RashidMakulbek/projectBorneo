// $('.carousel').carousel({
  // interval: 2000,

// });

autoSlider();
var left = 0;
var timer;


function autoSlider(){
	timer=setTimeout(function (){var polosa = document.getElementById('polosa');
	left = left-445;
	if (left < -890){
		left = 0;
		clearTimeout(timer);
	}
	polosa.style.left=left+'px';
	autoSlider();}, 5000);
}
