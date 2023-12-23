const utils = require("./utils");

// Calculates monthly loan, when payment graph is set to annuity
const monthly_loan = (total, interest, years) => {
  const n = years * 12;
  const i = interest / 100 / 12;
  const monthlyPayment = (total * i) / (1 - Math.pow(1 + i, -n));
  return utils.roundTwoDecimalPlaces(monthlyPayment);
};

module.exports = monthly_loan;
