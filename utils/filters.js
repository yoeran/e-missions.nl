const { DateTime } = require("luxon");
const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");
const markdownIt = require("markdown-it");

const md = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
});

const translations = yaml.load(
  fs.readFileSync(path.resolve(path.join(__dirname, "../src/translations.yml")))
);

const formatCo2 = (str) => str.replace(/co2/gi, "CO<sub>2</sub>");

module.exports = {
  dateToFormat: function (date, format) {
    return DateTime.fromJSDate(date, { zone: "utc" }).toFormat(String(format));
  },

  dateToISO: function (date) {
    return DateTime.fromJSDate(date, { zone: "utc" }).toISO({
      includeOffset: false,
      suppressMilliseconds: true,
    });
  },

  obfuscate: function (str) {
    const chars = [];
    for (var i = str.length - 1; i >= 0; i--) {
      chars.unshift(["&#", str[i].charCodeAt(), ";"].join(""));
    }
    return chars.join("");
  },

  translateFn: function (lang) {
    return (key) => translations[key][lang];
  },

  getPage: function (collection, slug, lang) {
    const pathFilter = lang ? `/${lang}/` : "/";
    return collection.find(
      (item) => item.fileSlug === slug && item.inputPath.includes(pathFilter)
    );
  },

  formatCo2,

  markdown: function (mdText) {
    return formatCo2(md.render(mdText));
  },

  spannify: function (text) {
    return text
      .split(" ")
      .map((word) => `<span>${word}</span>`)
      .join(" ");
  },

  sortBy: function (collection, prop) {
    return collection.sort(function (a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      }
      if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    });
  },
};
