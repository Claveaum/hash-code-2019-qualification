const debug = require("debug")("solve");
const _ = require("lodash");
const gridUtils = require("./grid-utils");

function generateResult(acc, p, i) {
  const index = i + 1;
  const photo = p;
  photo.index = index;
  const resultSize = acc.length;
  if (!resultSize) {
    if (p.orientation === "H") return [{ photos: [photo] }];
  }
  const lastResult = acc[resultSize - 1];
  if (lastResult && lastResult.photos.length < 2) {
    if (lastResult.photos[0].orientation === "H" && p.orientation === "H") {
      return [...acc, { photos: [photo] }];
    }
  }
  return acc;
}

function solve(problem, file) {
  // destructure this!
  const { photos } = problem;
  const resultSorted = _.sortBy(photos, ["orientation"]);
  const slidesComplete = resultSorted.reduce(
    (acc, photo, i) => generateResult(acc, photo, i),
    []
  );
  return slidesComplete.map(p => ({
    photos: p.photos.map(photo => photo.index)
  }));
}

module.exports = solve;
