let mainChilds = document.querySelector(".portfolio__main").children;
let menu = document.querySelector(".menu").children;
mainChilds = [...mainChilds];
menu = [...menu];

hideSections(0);

menu.forEach((li, i) => {
  li.addEventListener("click", function() {
    hideSections(menu.indexOf(this));
  }, false);
});



function hideSections(visibleSection) {
  mainChilds.forEach((sections, i) => {
    if (i !== visibleSection) {
      sections.classList.add("hidden");
    } else {
      sections.classList.remove("hidden");
    }
  });
}