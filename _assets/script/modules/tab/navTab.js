import setCookie from '../cookie/cookie.js';

const navTab = function(domElements, visibleSection) {
	domElements.mainChilds.forEach((sections, i) => {
	  if (i !== visibleSection) {
	    sections.classList.add("hidden");
	  } else {
	    sections.classList.remove("hidden");
	  }
	});
	setCookie(visibleSection);
}

export default navTab;