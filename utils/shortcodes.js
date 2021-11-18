const fs = require("fs");
const path = require("path");

module.exports = {
  icon: function (name) {
    return `<svg class="icon icon--${name}" role="img" aria-hidden="true" width="24" height="24">
        <use xlink:href="#svg-${name}"></use>
    </svg>`;
  },

  co2image: function (src, className = "") {
    if (!src) {
      return "";
    }

    let co2;

    try {
      const filepath = path.resolve(path.join(__dirname, "../", src));
      const { size } = fs.statSync(filepath);
      const kb = size / 1024;
      const co2Conversion = 0.000000936;

      co2 = Math.round(kb * co2Conversion * 1000 * 1000);
    } catch (err) {
      /* */
    }

    return `<figure class="decorated-img ${className}">
    <img src="${src}" alt="" />
    ${
      co2 &&
      `<figcaption>
        ${co2} &#xB5;g CO<sub>2</sub>
    </figcaption>`
    }
</figure>`;
  },
};
