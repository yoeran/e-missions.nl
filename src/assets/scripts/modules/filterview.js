export class FilterView {
  resetButton;
  filterButtons;
  links;
  dropdown;

  constructor() {
    this.resetButton = document.querySelector("[data-clear-filter]");
    this.dropdown = document.querySelector("[data-filter-dropdown]");

    this.filterButtons = document.querySelectorAll("[data-filter]");
    this.links = document.querySelectorAll("[data-category]");

    // Events
    this.resetButton.addEventListener("click", this.resetFilter.bind(this));

    this.filterButtons.forEach((el) => {
      el.addEventListener("click", () => {
        this.filterLinks(el.getAttribute("data-filter"));
        el.setAttribute("data-filter-active", "");
      });
    });

    this.dropdown.addEventListener("change", (ev) => {
      const value = ev.target.value;
      if (value) {
        this.filterLinks(ev.target.value);
      } else {
        this.resetFilter();
      }
    });
  }

  filterLinks(category) {
    this.removeActiveState();

    this.links.forEach((link) => {
      const cat = link.getAttribute("data-category").split(",");
      const show = !cat.includes(category);
      link.classList.toggle("resource--hidden", show);
    });
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
