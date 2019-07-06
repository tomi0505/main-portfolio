import navTab from './navTab.js';
import {activeTabs} from './navTabKey.js';

let activeIndexTab = 0;

const selectTab = function(domElements) {
	let minusMargin = 0;

	domElements.menu.forEach((li, i) => {

	  li.addEventListener("click", function() {
	  	activeIndexTab = domElements.menu.indexOf(this);
	    domElements.menu.forEach((li) => {
	      li.classList.remove("menu__active");
	    });
	    this.classList.add("menu__active");
	    navTab(domElements, domElements.menu.indexOf(this));
	    activeTabs(domElements);
	  }, false);
	});
}

export default selectTab;