const setCookie = function(value1) {
	document.cookie = `activeTab=${value1}; path=/`;
};

const getCookie = function(name) {
	if (document.cookie !== "") {
        const cookies = document.cookie.split(/; */);

        for (let i=0; i<cookies.length; i++) {
            const cookieName = cookies[i].split("=")[0];
            const cookieVal = cookies[i].split("=")[1];
            if (cookieName === name) {
                return cookieVal;
            }
        }
    } else {
    	return 0;
    }
};

export default setCookie;
export {getCookie};