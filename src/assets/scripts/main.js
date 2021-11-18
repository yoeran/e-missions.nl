import "focus-visible";
import "./modules/nav";

// TODO: Add script to auto-sort tastings

document.querySelectorAll("[data-click-href]").forEach((el) => {
  el.addEventListener("click", () => {
    location.assign(el.getAttribute("data-click-href"));
  });
});

document.querySelectorAll("[data-calculator]").forEach((el) => {
  const { Type } = require("./modules/calculators");
  const key = el.getAttribute("data-calculator");

  if (Object.values(Type).includes(key)) {
    const Calculator = require("./modules/Calculator.svelte").default;
    new Calculator({
      target: el,
      props: { key },
    });
  } else {
    el.remove();
  }
});
