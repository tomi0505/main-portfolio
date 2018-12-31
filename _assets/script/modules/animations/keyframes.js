const animationFinish = function () {
  const portfolioH1Title = document.querySelector(".portfolio__title");
  const selfPhoto = portfolioH1Title.querySelector(".self-photo-item");
  const fullName = portfolioH1Title.querySelector(".portfolio__full-name");
  const subtitle = portfolioH1Title.querySelector(".portfolio__subtitle");

  selfPhoto.addEventListener("animationend", function () {
    this.classList.add("self-photo-item--stopAnimation");
  }, false);

  fullName.addEventListener("animationend", function () {
    this.classList.add("portfolio__full-name--stopAnimation");
  }, false);

  subtitle.addEventListener("animationend", function () {
    this.classList.add("portfolio__subtitle--stopAnimation");
  }, false);
};

export default animationFinish;