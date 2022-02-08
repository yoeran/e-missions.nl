export class TastingSorter {
  events;
  futureList;
  pastList;

  constructor() {
    this.events = document.querySelectorAll("[data-tastingitem]");
    this.futureList = document.querySelector('[data-tasting="future"]');
    this.pastList = document.querySelector('[data-tasting="past"]');

    this.sortLists();
  }

  sortLists() {
    this.events.forEach((el) => {
      el.remove();

      const dt = parseInt(el.getAttribute("data-tastingitem"), 10);
      if (dt > Date.now()) {
        this.futureList.append(el);
      } else {
        this.pastList.append(el);
      }
    });
  }
}
