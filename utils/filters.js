const { format } = require("date-fns");
const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");
const { nl, enUS } = require("date-fns/locale");

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
};
