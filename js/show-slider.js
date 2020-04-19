import { SLICK_CONFIG } from "./constants";

export default class	Slider {

	constructor(){
		this.container = $('.featured-shows__shows-slider');
	}

	init(){
		this.container.slick(SLICK_CONFIG);
	}
}