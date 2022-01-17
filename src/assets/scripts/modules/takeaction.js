export class TakeAction {
  constructor() {
    document.querySelectorAll("[data-ta-todo]").forEach((el) => {
      el.addEventListener("change", () => this.toggleTodo(el));

      const todo = el.getAttribute("data-ta-todo");
      if (localStorage.getItem(todo)) {
        el.setAttribute("checked", true);
        el.parentElement.classList.add("ta-todo--added");
      }
    });
  }

  toggleTodo(el) {
    const todo = el.getAttribute("data-ta-todo");
    if (localStorage.getItem(todo)) {
      localStorage.removeItem(todo);
      el.parentElement.classList.remove("ta-todo--added");
    } else {
      localStorage.setItem(todo, 0);
      el.parentElement.classList.add("ta-todo--added");
    }
  }
}
