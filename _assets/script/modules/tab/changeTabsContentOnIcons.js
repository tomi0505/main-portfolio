const originalValues = [];
const newValuseWithIcon = ['home1', 'user1', 'tools', 'suitcase1', 'contact5'];
const originTemplate = '<i class="icon-{{icon-name}} icon"></i>';

const rwd = window.matchMedia("(max-width: 768px)");

const saveOriginalValues = function(domElements) {
	domElements.menu.forEach((li, i)=> {
		originalValues.push(li.textContent);
	});
};

const changeTabsContentOnIcons = function(domElements) {
  if (rwd.matches) {
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