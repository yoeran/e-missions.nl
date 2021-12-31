module.exports = {
  pages_nl: function (collection) {
    return collection.getAll().filter((item) => {
      return (
        item.data.hasOwnProperty("eleventyNavigation") &&
        item.inputPath.match(/nl\/|_nl/)
      );
    });
  },

  pages_en: function (collection) {
    return collection.getAll().filter((item) => {
      return (
        item.data.hasOwnProperty("eleventyNavigation") &&
        item.inputPath.match(/en\/|_en/)
      );
    });
  },

  topics_nl: function (collection) {
    return collection
      .getAll()
      .filter((item) => item.inputPath?.includes("topics/nl"));
  },

  topics_en: function (collection) {
    return collection
      .getAll()
      .filter((item) => item.inputPath?.includes("topics/en"));
  },

  resources_nl: function (collection) {
    return collection
      .getAll()
      .filter((item) => item.inputPath?.includes("resources/nl"));
  },

  resources_en: function (collection) {
    return collection
      .getAll()
      .filter((item) => item.inputPath?.includes("resources/en"));
  },
};
