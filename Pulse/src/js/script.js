// for (let i = 1; i < 8; i++) {
// 	console.log(i);
// }

// function logging(a, b) {
// 	console.log( a + b )
// }
// logging(3, 5);
// logging(4, 11);

$(document).ready(function(){
	$('.carousel__inner').slick({
		// dots: true,
		speed: 1200,
		// adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: true,
					arrows: false
				}
			}
		]
	});
})