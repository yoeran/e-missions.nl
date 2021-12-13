export class TakeAction {
  constructor() {
    document.querySelectorAll("[data-ta-todo]").forEach((el) => {
      el.addEventListener("change", () => this.toggleTodo(el));

      const todo = el.getAttribute("data-ta-todo");
      if (localStorage.getItem(todo)) {
        el.setAttribute("checked", true);
      }
    });
  }

  toggleTodo(el) {
    const todo = el.getAttribute("data-ta-todo");
    if (localStorage.getItem(todo)) {
      localStorage.removeItem(todo);
    } else {
      localStorage.setItem(todo, 0);
    }
  }
}
