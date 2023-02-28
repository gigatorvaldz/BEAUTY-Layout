const adaptiveButton = document.getElementsByClassName("adaptive-button");
const adaptiveList = document.getElementsByClassName("navigation-menu__list")[0];

for (const el of adaptiveButton) {
  el.addEventListener("click", () => {
    el.classList.toggle("open");
    adaptiveList.classList.toggle("adaptive-visually-hidden")
  });
}
