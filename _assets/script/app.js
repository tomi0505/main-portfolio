import navTab from './modules/tab/navTab.js';
import selectTab from './modules/tab/selectTab.js';
import navTabKey from './modules/tab/navTabKey.js';
import changeTabsContentOnIcons from './modules/tab/changeTabsContentOnIcons.js';
import {saveOriginalValues} from './modules/tab/changeTabsContentOnIcons.js';
import hideInactiveProjectsLink from './modules/portfolio/hideInactiveProjectsLink.js';
import animationFinish from './modules/animations/keyframes.js';

document.addEventListener("DOMContentLoaded", function() {
	let mainChilds = document.querySelector(".portfolio__main").children;
	let menu = document.querySelector(".menu").children;
	mainChilds = [...mainChilds];
	menu = [...menu];

	const preloader = document.querySelector(".preloader");

	const domElements = {
		menu,
		mainChilds
	};

	navTab(domElements, 0);
	selectTab(domElements);
	navTabKey(domElements);
	saveOriginalValues(domElements);
	changeTabsContentOnIcons(domElements);
	hideInactiveProjectsLink();

	animationFinish();

	changeTabsContentOnIcons(domElements);
	
	window.addEventListener("resize", function() {
		changeTabsContentOnIcons(domElements);
	}, false);

	preloader.classList.add("hidden");
	document.body.classList.remove("loading");
}, false);