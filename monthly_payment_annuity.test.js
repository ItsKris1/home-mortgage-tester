const monthly_loan = require("./monthly_payment_annuity");

const testCases = [
  {
    amount: 190000,
    period: 25,
    interest: 5,
    expectedMonthlyPayment: 1110.72,
  },
  {
    amount: 287500,
    period: 17,
    interest: 8,
    expectedMonthlyPayment: 2582.49,
  },
  {
    amount: 350000,
    period: 10,
    interest: 5,
    expectedMonthlyPayment: 3712.29,
  },
];

test.each(testCases)(
  `Testing home mortgage calculator with following information:    
    Loan amount: $amount eur
    Period: $period years
    Interest: $interest %
    Payment graph type: annuity`,
  ({ amount, period, interest, expectedMonthlyPayment }) => {
    expect(monthly_loan(amount, interest, period)).toBe(expectedMonthlyPayment);
  }
);
