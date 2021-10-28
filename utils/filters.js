const { format } = require("date-fns");
const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");
const markdownIt = require("markdown-it");

const { nl, enUS } = require("date-fns/locale");

const md = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
});

const translations = yaml.load(
  fs.readFileSync(path.resolve(path.join(__dirname, "../src/translations.yml")))
);

const LOCALE_MAP = {
  en_US: enUS,
  nl_NL: nl,
};

module.exports = {
  dateToFormat: function (date, formatStr, locale) {
    const options = { locale: LOCALE_MAP[locale] || LOCALE_MAP.en_US };
    return format(date, formatStr | "PPP", options);
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
    return collection.find(
      (item) => item.fileSlug === slug && item.inputPath.includes(`/${lang}/`)
    );
  },

  markdown: function (mdText) {
    return md.render(mdText);
  },
};
