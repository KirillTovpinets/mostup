import ShowSlider from './show-slider';
import TeamSlider from './team-slider';
import TestimonialsSlider from './testimonials-slier';

$(document).ready(function() {
	const showSlider = new ShowSlider();
	const teamSlider = new TeamSlider();
	const testimonialsSlider = new TestimonialsSlider();

	teamSlider.init();
	showSlider.init();
	testimonialsSlider.init();
})