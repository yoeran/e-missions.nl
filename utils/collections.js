module.exports = {
  pages_nl: function (collection) {
    return collection.getFilteredByGlob("./src/nl/pages/*");
  },

  pages_en: function (collection) {
    return collection.getFilteredByGlob("./src/en/pages/*");
  },
};
