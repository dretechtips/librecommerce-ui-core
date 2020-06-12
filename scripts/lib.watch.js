const { watch } = require("gulp");
const { init, scss, ts }

module.exports = async function() {
  await init();
  watch('./src/**/*.scss', scss);
  watch('./src/**/+(*.ts|*.tsx)', series(ts, js));
}
