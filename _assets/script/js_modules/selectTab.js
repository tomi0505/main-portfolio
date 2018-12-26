import navTab from './navTab.js';
import {activeTabs} from './navTabKey.js';

const selectTab = function(domElements) {
	let minusMargin = 0;

	domElements.menu.forEach((li, i) => {
	  domElements.menu[0].classList.add("menu__active");
	  li.addEventListener("click", function() {
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