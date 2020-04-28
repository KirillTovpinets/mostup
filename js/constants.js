export const SLICK_CONFIG = {
	dots: true,
	infinite: false,
	autoplay: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	arrows: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
}

export const TEAM_SLIDER_CONFIG = {
	...SLICK_CONFIG,
	slidesToShow: 7,
	slidesToScroll: 7,
}

export const TESTIMONIALS_SLIDER_CONFIG = {
	...SLICK_CONFIG,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	appendDots: '.dots-container',
	prevArrow: '<button type="button" class="slick-prev-btn"><i class="fas fa-angle-left fa-2x"></i></button>',
	nextArrow: '<button type="button" class="slick-next-btn"><i class="fas fa-angle-right fa-2x"></i></button>'
}