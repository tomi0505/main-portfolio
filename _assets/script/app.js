import navTab from './js_modules/navTab.js';
import selectTab from './js_modules/selectTab.js';


document.addEventListener("DOMContentLoaded", function() {
	let mainChilds = document.querySelector(".portfolio__main").children;
	let menu = document.querySelector(".menu").children;
	mainChilds = [...mainChilds];
	menu = [...menu];

	const domElements = {
		menu,
		mainChilds
	};

	navTab(domElements, 0);
	selectTab(domElements);
}, false);