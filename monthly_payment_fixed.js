const utils = require("./utils");

// Calculations for calculating monthly payment, when payment graph is set to fixed

const calculatePrincipalRepayment = (amount, period) => {
  return utils.roundTwoDecimalPlaces(amount / (period * 12));
};

const calculateFirstMonthInterest = (amount, interest) => {
  return utils.roundTwoDecimalPlaces(amount * (interest / 100 / 12));
};

const calculateFirstMonthPayment = (amount, interest, period) => {
  return (
    calculatePrincipalRepayment(amount, period) +
    calculateFirstMonthInterest(amount, interest)
  );
};

module.exports = {
  calculateFirstMonthInterest,
  calculatePrincipalRepayment,
  calculateFirstMonthPayment,
};
