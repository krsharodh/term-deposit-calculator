import inquirer from "inquirer";
import { TermDeposit } from "./types";
import { calculateFinalBalanceOfTermDeposit } from "./termDepositCalculator";

/**
 * Entry point of the app
 */
const main = async () => {
  console.log("Term Deposit Calculator");

  const termDeposit = await inquirer.prompt<TermDeposit>([
    {
      name: "startDepositAmount",
      message: "Enter start deposit amount",
      type: "number",
    },
    {
      name: "interestRate",
      message: "Enter interest rate",
      type: "number",
      step: "any",
    },
    {
      name: "investmentTerm",
      message: "Enter investment term in years",
      type: "number",
    },
    {
      name: "interestPaid",
      message: "Enter interest paid",
      type: "list",
      choices: ["monthly", "quarterly", "annually", "maturity"],
    },
  ]);

  console.log(`Start deposit amount: $${termDeposit.startDepositAmount}`);
  console.log(`Interest Rate: ${termDeposit.interestRate}% p.a.`);
  console.log(`Investment Term: ${termDeposit.investmentTerm} years`);
  console.log(`Interest Paid: ${termDeposit.interestPaid}`);

  console.log(
    `Final Balance: $${calculateFinalBalanceOfTermDeposit(termDeposit)}`
  );
};

main();
