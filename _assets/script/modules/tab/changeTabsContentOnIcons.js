const originalValues = [];
const newValuseWithIcon = ['home1', 'user1', 'tools', 'suitcase1', 'contact5'];
const originTemplate = '<i class="icon-{{icon-name}} icon"></i>';

const saveOriginalValues = function(domElements) {
	domElements.menu.forEach((li, i)=> {
		originalValues.push(li.textContent);
	});
};

const changeTabsContentOnIcons = function(domElements) {
	if(window.innerWidth <= 768) {
		domElements.menu.forEach((li, i)=> {
			const newString = originTemplate.replace('{{icon-name}}', newValuseWithIcon[i]);
			li.innerHTML = newString;
		});
	} else {
		domElements.menu.forEach((li, i)=> {
			li.innerHTML = originalValues[i];
		});
	}
};

export default changeTabsContentOnIcons;
export {saveOriginalValues};