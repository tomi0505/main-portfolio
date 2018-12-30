import navTab from './modules/tab/navTab.js';
import selectTab from './modules/tab/selectTab.js';
import navTabKey from './modules/tab/navTabKey.js';
import changeTabsContentOnIcons from './modules/tab/changeTabsContentOnIcons.js';
import {saveOriginalValues} from './modules/tab/changeTabsContentOnIcons.js';
import hideInactiveProjectsLink from './modules/portfolio/hideInactiveProjectsLink.js';
import {getCookie} from './modules/cookie/cookie.js';
import cookieAlert from './modules/cookie/cookieAlert.js';

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

	navTab(domElements, getCookie("activeTab"));
	selectTab(domElements);
	navTabKey(domElements);
	saveOriginalValues(domElements);
	changeTabsContentOnIcons(domElements);
	hideInactiveProjectsLink();

	if(getCookie("cookieAlert")) {
		const cookieAlert = document.querySelector(".cookie-alert");
		cookieAlert.classList.add("hidden");
	} else {
		cookieAlert();
	}

	window.addEventListener("resize", function() {
		changeTabsContentOnIcons(domElements);
	}, false);

	preloader.classList.add("hidden");
}, false);