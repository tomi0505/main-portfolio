let mainChilds = document.querySelector(".portfolio__main").children;
let menu = document.querySelector(".menu").children;
mainChilds = [...mainChilds];
menu = [...menu];

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
  }, false);
});