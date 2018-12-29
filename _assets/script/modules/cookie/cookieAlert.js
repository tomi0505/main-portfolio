const cookieAlert = function() {
	const acceptBtn = document.querySelector(".cookie-alert__accept");

	acceptBtn.addEventListener("click", function(e) {
		e.preventDefault();
	}, false);
}

export default cookieAlert;