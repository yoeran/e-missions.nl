const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginSvgSprite = require("eleventy-plugin-svg-sprite");
const markdownIt = require("markdown-it");

const filters = require("./utils/filters.js");
const transforms = require("./utils/transforms.js");
const shortcodes = require("./utils/shortcodes.js");
const collections = require("./utils/collections.js");

module.exports = function (config) {
  // Plugins
  config.addPlugin(pluginRss);
  config.addPlugin(pluginNavigation);
  config.addPlugin(pluginSvgSprite, {
    path: "./src/assets/icons",
  });

  // Filters
  Object.keys(filters).forEach((filterName) => {
    config.addFilter(filterName, filters[filterName]);
  });

  // Transforms
  Object.keys(transforms).forEach((transformName) => {
    config.addTransform(transformName, transforms[transformName]);
  });

  // Shortcodes
  Object.keys(shortcodes).forEach((shortcodeName) => {
    config.addShortcode(shortcodeName, shortcodes[shortcodeName]);
  });

  // Collections
  Object.keys(collections).forEach((collectionName) => {
    config.addCollection(collectionName, collections[collectionName]);
  });

  // Asset Watch Targets
  config.addWatchTarget("./src/assets");

  // Markdown
  config.setLibrary(
    "md",
    markdownIt({
      html: true,
      breaks: true,
      linkify: true,
      typographer: true,
    })
  );

  // Captures
  let _CAPTURES;
  config.on("beforeBuild", () => {
    //I need this to wipe _CAPTURES when editing pages, wouldn't be an issue in prod
    _CAPTURES = {};
  });

  config.addPairedShortcode("capture", function (content, name) {
    if (!_CAPTURES[this.page.inputPath]) {
      _CAPTURES[this.page.inputPath] = {};
    }
    if (!_CAPTURES[this.page.inputPath][name]) {
      _CAPTURES[this.page.inputPath][name] = "";
    }
    _CAPTURES[this.page.inputPath][name] += content;
    return "";
  });

  config.addShortcode("displaycapture", function (name) {
    if (
      _CAPTURES[this.page.inputPath] &&
      _CAPTURES[this.page.inputPath][name]
    ) {
      return _CAPTURES[this.page.inputPath][name];
    }
    return "";
  });

  // Layouts
  config.addLayoutAlias("base", "base.njk");

  // Pass-through files
  config.addPassthroughCopy("admin");
  config.addPassthroughCopy("static/img");
  config.addPassthroughCopy("src/robots.txt");
  config.addPassthroughCopy("src/site.webmanifest");
  config.addPassthroughCopy("src/assets/images");
  config.addPassthroughCopy("src/assets/fonts");

  // Deep-Merge
  config.setDataDeepMerge(true);

  // Base Config
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    templateFormats: ["njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
