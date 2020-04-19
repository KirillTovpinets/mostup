import { TEAM_SLIDER_CONFIG } from './constants';

export default class TeamSlider {
	constructor() {
		this.container = $('.our-actors__list-slider');
	}

	init() {
		this.container.slick(TEAM_SLIDER_CONFIG)
	}
}