const roundTwoDecimalPlaces = (n) =>
  Math.round((n + Number.EPSILON) * 100) / 100;

module.exports = { roundTwoDecimalPlaces };
