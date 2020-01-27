// for (let i = 1; i < 8; i++) {
// 	console.log(i);
// }

// function logging(a, b) {
// 	console.log( a + b )
// }
// logging(3, 5);
// logging(4, 11);

$(document).ready(function(){
	/*  ================================== Carousel slider js ================================== */
	$('.carousel__inner').slick({
		// dots: true,
		speed: 1200,
		// adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
		// slidesToShow: 1,
		// slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: true,
					arrows: false,
					// slidesToShow: 1,
					// slidesToScroll: 1,
				}
			},
		// 	{
		// 		breakpoint: 768,
		// 		settings: {
		// 			slidesToShow: 2,
		// 			slidesToScroll: 1,
		// 			// dots: true,
		// 			// arrows: false
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 576,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			slidesToScroll: 1
		// 		}
		// 	}
			
		]
	});
/*  ================================== Catalog TAB js ================================== */
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});
/*  ================================== Catalog items js ================================== */
	function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		});
	};

	toggleSlide('.catalog-item__link')
	toggleSlide('.catalog-item__back')
});