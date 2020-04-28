import { TESTIMONIALS_SLIDER_CONFIG } from './constants';

export default class TestimonialsSlider {
	constructor() {
		this.container = $('.testimonials-slider');
	}

	init() {
		this.container.slick(TESTIMONIALS_SLIDER_CONFIG)
	}
}