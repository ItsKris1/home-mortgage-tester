const monthly_payment_fixed = require("./monthly_payment_fixed");

const testCases = [
  {
    amount: 200000,
    period: 15,
    interest: 5,
    expectedFirstMonthInterest: 833.33,
    expectedPrincipal: 1111.11,
    expectedFirstMonthPayment: 1944.44,
  },
  {
    amount: 315000,
    period: 30,
    interest: 3,
    expectedFirstMonthInterest: 787.5,
    expectedPrincipal: 875.0,
    expectedFirstMonthPayment: 1662.5,
  },
  {
    amount: 500000,
    period: 10,
    interest: 8,
    expectedFirstMonthInterest: 3333.33,
    expectedPrincipal: 4166.67,
    expectedFirstMonthPayment: 7500.0,
  },
];

test.each(testCases)(
  `Testing home mortgage calculator with following information:    
    Loan amount: $amount eur
    Period: $period years
    Interest: $interest %
    Payment graph type: fixed`,
  ({
    amount,
    period,
    interest,
    expectedFirstMonthInterest,
    expectedPrincipal,
  }) => {
    expect(
      monthly_payment_fixed.calculateFirstMonthInterest(amount, interest)
    ).toBe(expectedFirstMonthInterest);

    expect(
      monthly_payment_fixed.calculatePrincipalRepayment(amount, period)
    ).toBe(expectedPrincipal);
    expect(
      monthly_payment_fixed.calculateFirstMonthPayment(amount, interest, period)
    ).toBe(expectedPrincipal + expectedFirstMonthInterest);
  }
);
