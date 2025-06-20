import { calculateFinalBalanceOfTermDeposit } from "../termDepositCalculator";
import { TermDeposit } from "../types";

describe("calculateFinalBalanceOfTermDeposit", () => {
  it("calculates term deposit for maturity", () => {
    const termDeposit = {
      startDepositAmount: 10000,
      interestRate: 1.1,
      investmentTerm: 3,
      interestPaid: "maturity",
    } as TermDeposit;
    const finalBalance = calculateFinalBalanceOfTermDeposit(termDeposit);
    expect(finalBalance).toBe(10330);
  });

  it("calculates term deposit for interest paid annually", () => {
    const termDeposit = {
      startDepositAmount: 10000,
      interestRate: 1.1,
      investmentTerm: 3,
      interestPaid: "annually",
    } as TermDeposit;
    const finalBalance = calculateFinalBalanceOfTermDeposit(termDeposit);
    expect(finalBalance).toBe(10334);
  });

  it("calculates term deposit for interest paid quarterly", () => {
    const termDeposit = {
      startDepositAmount: 10000,
      interestRate: 1.1,
      investmentTerm: 3,
      interestPaid: "quarterly",
    } as TermDeposit;
    const finalBalance = calculateFinalBalanceOfTermDeposit(termDeposit);
    expect(finalBalance).toBe(10335);
  });

  it("calculates term deposit for interest paid monthly", () => {
    const termDeposit = {
      startDepositAmount: 10000,
      interestRate: 1.1,
      investmentTerm: 3,
      interestPaid: "monthly",
    } as TermDeposit;
    const finalBalance = calculateFinalBalanceOfTermDeposit(termDeposit);
    expect(finalBalance).toBe(10335);
  });
});
