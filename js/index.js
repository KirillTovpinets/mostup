import ShowSlider from './show-slider';
import TeamSlider from './team-slider';

$(document).ready(function() {
	const showSlider = new ShowSlider();
	const teamSlider = new TeamSlider();

	teamSlider.init();
	showSlider.init();
})