import "focus-visible";
import { FilterView } from "./modules/filterview";
import "./modules/nav";
import { TakeAction } from "./modules/takeaction";
import { TastingSorter } from "./modules/tastingsorter";

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

if (document.querySelector("[data-filter]")) {
  new FilterView();
}

if (document.querySelector("[data-tasting]")) {
  new TastingSorter();
}

if (document.querySelector("[data-takeaction]")) {
  new TakeAction();
}

const taList = document.querySelector("[data-ta-list]");
if (taList) {
  const TakeActionList = require("./modules/TakeActionList.svelte").default;
  new TakeActionList({ target: taList });
}
