import {testX} from "./modules/keyCodeTab.js";
console.log(testX);


let mainChilds = document.querySelector(".portfolio__main").children;
let menu = document.querySelector(".menu").children;
mainChilds = [...mainChilds];
menu = [...menu];

let activeTabNr = 0;


// HIDE/SHOW_A_SECTIONS
const hideSections = function(visibleSection) {
  mainChilds.forEach((sections, i) => {
    if (i !== visibleSection) {
      sections.classList.add("hidden");
    } else {
      sections.classList.remove("hidden");
    }
  });
}

hideSections(0);


// CLICK_THE_TABS_AND_SET_MINUS_LEFT_POSITION
let minusMargin = 0;

menu.forEach((li, i) => {
  menu[i].style.left = `${minusMargin}px`;
  minusMargin = minusMargin - 12;
  menu[0].classList.add("menu__active");
  li.addEventListener("click", function() {
    menu.forEach((li) => {
      li.classList.remove("menu__active");
    });
    this.classList.add("menu__active");
    hideSections(menu.indexOf(this));
    activeTabs();
  }, false);
});


// RETURN_INDEX_ACTIVE_TABS
const activeTabs = function() {
  let activeTabIndex;
  menu.forEach((li) => {
    let activeTab = li.classList.contains("menu__active");
    if (activeTab) {
      activeTabIndex = menu.indexOf(li);
    }
  });
  activeTabNr = activeTabIndex;
  return activeTabIndex;
}


// KEY_NAV
const keyup = document.addEventListener("keyup", function(e) {
  if (e.keyCode === 39) {
    if (activeTabNr >= 0 && activeTabNr < (menu.length-1)) {
      activeTabNr = ++activeTabNr;
      hideSections(activeTabNr);
      menu.forEach((li, i) => {
        li.classList.remove("menu__active");
      });
      menu[activeTabNr].classList.add("menu__active");
    }
  } else if (e.keyCode === 37) {
    if (activeTabNr >= 1 && activeTabNr < (menu.length)) {
      activeTabNr = --activeTabNr;
      hideSections(activeTabNr);
      menu.forEach((li, i) => {
        li.classList.remove("menu__active");
      });
      menu[activeTabNr].classList.add("menu__active");
    }
  }
}, false);