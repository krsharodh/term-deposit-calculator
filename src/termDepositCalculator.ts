import { interestPeriodsStrings, TermDeposit } from "./types";

const compundingPeriods: Record<
  Exclude<interestPeriodsStrings, "maturity">,
  number
> = {
  monthly: 12,
  quarterly: 4,
  annually: 1,
};

/**
 * Calculates the final balance of a term deposit
 * @param termDeposit The object containing (startDepositAmount, interestRate, investmentTerm, and interestPaid)
 * @returns final balance of the term deposit
 */
export const calculateFinalBalanceOfTermDeposit = (
  termDeposit: TermDeposit
): number => {
  const { startDepositAmount, interestRate, investmentTerm, interestPaid } =
    termDeposit;

  const annualInterestRate = interestRate / 100;

  let finalBalance;

  /**
   * The term deposit formula used here is
   *
   * A = P (1 + r/n)^nt for monthly, quarterly, and annually
   *
   * A = P (1 + rt) for maturity
   */
  if (interestPaid === "maturity") {
    finalBalance =
      startDepositAmount * (1 + annualInterestRate * investmentTerm);
  } else {
    const numberOfCompoundingPeriods = compundingPeriods[interestPaid];

    finalBalance =
      startDepositAmount *
      Math.pow(
        1 + annualInterestRate / numberOfCompoundingPeriods,
        numberOfCompoundingPeriods * investmentTerm
      );
  }
  return Math.round(finalBalance);
};
