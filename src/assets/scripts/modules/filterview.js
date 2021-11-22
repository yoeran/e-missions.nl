export class FilterView {
  resetButton;
  filterButtons;
  links;

  constructor() {
    this.resetButton = document.querySelector("[data-clear-filter]");

    this.filterButtons = document.querySelectorAll("[data-filter]");
    this.links = document.querySelectorAll("[data-category]");

    this.resetButton.addEventListener("click", this.resetFilter.bind(this));

    this.filterButtons.forEach((el) => {
      el.addEventListener("click", () => {
        this.filterLinks(el);
      });
    });
  }

  filterLinks(el) {
    const category = el.getAttribute("data-filter");
    this.removeActiveState();

    this.links.forEach((link) => {
      const cat = link.getAttribute("data-category").split(",");
      const show = !cat.includes(category);
      link.classList.toggle("resource--hidden", show);
    });

    el.setAttribute("data-filter-active", "");
  }

  resetFilter() {
    this.removeActiveState();

    this.links.forEach((link) => {
      link.classList.remove("resource--hidden");
    });

    this.resetButton.setAttribute("data-filter-active", "");
  }

  removeActiveState() {
    const current = document.querySelector("[data-filter-active]");
    if (current) {
      current.removeAttribute("data-filter-active");
    }
  }
}
