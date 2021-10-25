module.exports = {
  pages_nl: function (collection) {
    return collection.getAll().filter((item) => {
      return (
        item.data.hasOwnProperty("eleventyNavigation") &&
        (item.inputPath.match(/nl\//) || item.inputPath.match(/_nl/))
      );
    });
  },

  pages_en: function (collection) {
    return collection.getAll().filter((item) => {
      return (
        item.data.hasOwnProperty("eleventyNavigation") &&
        (item.inputPath.match(/en\//) || item.inputPath.match(/_en/))
      );
    });
  },
};
