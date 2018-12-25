import navTab from './navTab.js';

let activeTabNr = 0;

const activeTabs = function(domElements) {
  let activeTabIndex;
  domElements.menu.forEach((li) => {
    let activeTab = li.classList.contains("menu__active");
    if (activeTab) {
      activeTabIndex = domElements.menu.indexOf(li);
    }
  });
  activeTabNr = activeTabIndex;
  return activeTabIndex;
}

const navTabKey = function(domElements) {
	document.addEventListener("keyup", function(e) {
	  if (e.keyCode === 39) {
	    if (activeTabNr >= 0 && activeTabNr < (domElements.menu.length-1)) {
	      activeTabNr = ++activeTabNr;
	      navTab(domElements, activeTabNr);
	      domElements.menu.forEach((li, i) => {
	        li.classList.remove("menu__active");
	      });
	      domElements.menu[activeTabNr].classList.add("menu__active");
	    }
	  } else if (e.keyCode === 37) {
	    if (activeTabNr >= 1 && activeTabNr < (domElements.menu.length)) {
	      activeTabNr = --activeTabNr;
	      navTab(domElements, activeTabNr);
	      domElements.menu.forEach((li, i) => {
	        li.classList.remove("menu__active");
	      });
	      domElements.menu[activeTabNr].classList.add("menu__active");
	    }
	  }
	}, false);
}

export default navTabKey;
export {activeTabs};