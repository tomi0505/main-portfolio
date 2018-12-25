import navTab from './js_modules/navTab.js';
import selectTab from './js_modules/selectTab.js';
import navTabKey from './js_modules/navTabKey.js';
import changeTabsContentOnIcons from './js_modules/changeTabsContentOnIcons.js';
import {saveOriginalValues} from './js_modules/changeTabsContentOnIcons.js';

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
	navTabKey(domElements);
	saveOriginalValues(domElements);
	changeTabsContentOnIcons(domElements);

	window.addEventListener("resize", function() {
		changeTabsContentOnIcons(domElements);
	}, false);
}, false);