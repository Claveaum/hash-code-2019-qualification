const _ = require("lodash/fp");
const fs = require("fs");
const debug = require("debug")("write");

module.exports = function write(path, solution) {
  writeLines(path, unparse(solution));
};

function writeLines(path, lines) {
  fs.writeFileSync(path, lines.join("\n"));
  debug(`wrote ${lines.length} lines to ${path}`);
}

const unparse = function (slides) {
  return [slides.length, ...slides.map(value => value.photos.map(p => p.index).join(" "))];
};

module.exports.unparse = unparse;
