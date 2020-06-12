const path = require("path");
const { exec } = require("child_process").promises;
const { src, dest } = require("gulp");
/**
 Initialization
 */
exports.init = async function () {
  const tsconfig = JSON.parse(await fs.readFile("./tsconfig.json"));
  if(!tsconfig.compilerOptions.target.toLowerCase().includes("es"))
    throw new Error("Invalid TS config target");
}
/**
 Typescript compile to Javascript
*/
exports.tsc = async function () {
  return exec("tsc");
}

/**
 Post-compilation javascript modification
*/
exports.js = async function () {
  // TODO
}
/**
 Post-compilation scss modification
*/
exports.scss =  async function () {
  return src(["./src/**/*.scss"])
    .pipe(dest("./lib/"));
}

/**
 On complete
*/
exports.complete =  async function () {
  return console.log("Task has been completed.");
}
