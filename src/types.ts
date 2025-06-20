export interface TermDeposit {
  startDepositAmount: number;
  interestRate: number;
  investmentTerm: number;
  interestPaid: interestPeriodsStrings;
}

const enum interestPeriods {
  monthly,
  quarterly,
  annually,
  maturity,
}

export type interestPeriodsStrings = keyof typeof interestPeriods;
