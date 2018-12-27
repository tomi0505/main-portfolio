const setCookie = function(value1) {
	document.cookie = `activeTab=${value1}; path=/`;
};

const getCookie = function() {
	if(document.cookie !== "") {
		const cookiePage = document.cookie;
		return (Number(cookiePage[cookiePage.length-1]));
	} else {
		return 0;
	}
};

export default setCookie;
export {getCookie};