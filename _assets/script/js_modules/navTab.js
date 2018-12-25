function navTab(domElements, visibleSection) {
	domElements.mainChilds.forEach((sections, i) => {
	  if (i !== visibleSection) {
	    sections.classList.add("hidden");
	  } else {
	    sections.classList.remove("hidden");
	  }
	});
}

export default navTab;