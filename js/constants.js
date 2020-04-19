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