import i18n from "../../../../_data/i18n";

export const format = (n, d = 1) =>
  n.toLocaleString(undefined, { maximumFractionDigits: n >= 100 ? 0 : d });

export const translate = (key, variables) => {
  const lang = location.pathname.includes("/nl/") ? "nl" : "en";
  try {
    const trans = i18n.translations[key][lang];
    return Object.entries(variables || {}).reduce((str, [k, v]) => {
      const re = new RegExp(`%${k}%`, "gm");
      return str.replace(re, v);
    }, trans);
  } catch (err) {
    console.error(`Error translating ${key} for ${lang}`);
    return `[[${key}]]`;
  }
};
