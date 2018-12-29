const cookieAlert = function() {
	const acceptBtn = document.querySelector(".cookie-alert__accept");

	acceptBtn.addEventListener("click", function(e) {
		e.preventDefault();
		document.cookie = `cookieAlert=true; path=/`;
	}, false);
}

export default cookieAlert;