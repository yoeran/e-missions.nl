const { DateTime } = require("luxon");
const fs = require("fs");
const path = require("path");
const markdownIt = require("markdown-it");

const i18n = require("../src/_data/i18n");

const md = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
});

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
    try {
      return (key) => i18n.translations[key][lang];
    } catch (error) {
      return (key) => `[[${lang}_${key}]]`;
    }
  },

  getPage: function (collection, slug, lang) {
    const pathFilter = lang ? `/${lang}/` : "/";

    // Get page for each translation with same slug
    const instances = collection.filter((item) => item.fileSlug === slug);

    // Get current page for requested language
    const pageForLanguage = instances.find((item) =>
      item.inputPath?.includes(pathFilter)
    );

    // Merge page.data of each page to one object
    const allDataFromInstances = instances.reduce((all, item) => {
      return {
        ...all,
        ...item.data,
      };
    }, {});

    // Return current page and merge all data from other instances with current page, defining current page as last to override translations.
    return {
      ...pageForLanguage,
      data: {
        ...allDataFromInstances,
        ...pageForLanguage.data,
      },
    };
  },

  formatCo2,

  markdown: function (mdText) {
    if (!mdText) {
      return "";
    }

    return formatCo2(md.render(mdText));
  },

  dump: function (obj) {
    return JSON.stringify(obj, null, 4);
  },

  spannify: function (text) {
    return text
      .split(" ")
      .map((word) => `<span>${word}</span>`)
      .join(" ");
  },

  sortBy: function (collection, prop) {
    return collection.sort(function (a, b) {
      if (a.data[prop] > b.data[prop]) {
        return 1;
      }
      if (a.data[prop] < b.data[prop]) {
        return -1;
      }
      return 0;
    });
  },

  join: function (props, sep) {
    if (props?.hasOwnProperty("join")) {
      return props.join(sep);
    }

    return props;
  },

  getFilterCount: function (collection, category) {
    return collection.filter((item) => item.data.category?.includes(category))
      .length;
  },

  onlyFutureItems: function (collection) {
    const now = Date.now();
    return collection.filter((item) => item.date.getTime() >= now);
  },

  onlyPastItems: function (collection) {
    const now = Date.now();
    return collection.filter((item) => item.date.getTime() < now);
  },
};
