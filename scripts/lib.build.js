const { series, parallel } = require("gulp");
const { init, tsc, scss, js } = require("./scripts/lib.function");

export const build = series(
  init,
  tsc,
  parallel( scss, js )
);


module.exports = build;
