import navTab from './navTab.js';

function selectTab(domElements) {
	let minusMargin = 0;

	domElements.menu.forEach((li, i) => {
	  domElements.menu[i].style.left = `${minusMargin}px`;
	  minusMargin = minusMargin - 12;
	  domElements.menu[0].classList.add("menu__active");
	  li.addEventListener("click", function() {
	    domElements.menu.forEach((li) => {
	      li.classList.remove("menu__active");
	    });
	    this.classList.add("menu__active");
	    navTab(domElements, domElements.menu.indexOf(this));
	    // activeTabs();
	  }, false);
	});
}

export default selectTab;