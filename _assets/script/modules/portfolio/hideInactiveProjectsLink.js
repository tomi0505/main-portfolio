const hideInactiveProjectsLink = function() {
	let projectsLinks = document.querySelectorAll(".portfolio__project-link-simple");
	projectsLinks = [...projectsLinks];

	projectsLinks.forEach((a)=> {
		if(a.getAttribute('href') === '#') {
			a.classList.add("hidden");
		}
	});
};

export default hideInactiveProjectsLink;