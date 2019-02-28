const debug = require("debug")("solve");
const _ = require("lodash");
const gridUtils = require("./grid-utils");
const solution2 = require("./solution-2");

function generateResult(acc, p, i) {
  const photo = p;
  const resultSize = acc.length;
  if (!resultSize) {
    if (p.orientation === "H") return [{ photos: [photo] }];
  }
  const lastResult = acc[resultSize - 1];
  if (lastResult && lastResult.photos.length < 2) {
    if (lastResult.photos[0].orientation === "H" && photo.orientation === "H") {
      return [...acc, { photos: [photo] }];
    }
  }
  return acc;
}

function solution1(photos) {
  const resultSorted = _.sortBy(photos, ["orientation"]);
  const slidesComplete = resultSorted.reduce(
    (acc, photo, i) => generateResult(acc, photo, i),
    []
  );
  return slidesComplete.map(p => ({
    photos: p.photos.map(photo => photo.index)
  }));
}

function solve(problem, file) {
  // destructure this!
  const { photos } = problem;
  const photoWithIndex = photos.map((ph, i) => {
    return { ...ph, index: i };
  });
  return solution2(photoWithIndex);
}

module.exports = solve;
