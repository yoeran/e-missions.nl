import "focus-visible";
import "./modules/nav";

// TODO: Add script to auto-sort tastings

document.querySelectorAll("[data-click-href]").forEach((el) => {
  el.addEventListener("click", () => {
    location.assign(el.getAttribute("data-click-href"));
  });
});
