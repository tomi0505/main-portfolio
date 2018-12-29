const cookieAlert = function() {
	const cookieAlert = document.querySelector(".cookie-alert");
	const acceptBtn = document.querySelector(".cookie-alert__accept");

	acceptBtn.addEventListener("click", function(e) {
		e.preventDefault();
		document.cookie = `cookieAlert=true; path=/`;
		cookieAlert.classList.add("hidden");
	}, false);
}

export default cookieAlert;