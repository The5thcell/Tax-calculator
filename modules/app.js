// console.log("app");
import { getDomElements } from "./dom-elements.js";
import { alertComp } from "./alert.js";

import { closeResult } from "./close-result.js";

const {
  incomeInput,
  statusSelect,
  calculateButton,
  taxAmount,
  result,
  standardDeductionDisplay,
} = getDomElements();

calculateButton.onclick = () => {
  const income = parseFloat(incomeInput.value);
  const status = statusSelect.value;

  if (!isNaN(income)) {
    // console.log(income, status);
    const tax = calcIncomeTax(income, status);
    taxAmount.textContent = `$${tax.toFixed(2)}`;
    result.classList.add("show");
  } else {
    alertComp();
  }
  return standardDeductionDisplay;
};

const standardDeduction = {
  single: 12400,
  married: 24800,
  headOfHousehold: 18650,
};

standardDeductionDisplay.textContent = `$${standardDeduction.single}`;

statusSelect.onchange = () => {
  const status = statusSelect.value;
  standardDeductionDisplay.textContent = `$${standardDeduction[status]}`;

  //   Re-calc tax dep in the status

  const income = parseFloat(incomeInput.value);

  if (!isNaN(income)) {
    const tax = calcIncomeTax(income, status);
    taxAmount.textContent = `$${tax.toFixed(2)}`;
    result.classList.add("animate");
  }
};

// load data

const response = await fetch("./data.json");
const brackets = await response.json();

console.log(brackets);

function calcIncomeTax(income, status) {
  const deduction = standardDeduction[status];
  const taxableIncome = Math.max(0, income - deduction);

  let remainingIncome = taxableIncome;
  let tax = 0;

  for (const bracket of brackets[status]) {
    const taxAmountInBracket = Math.min(
      remainingIncome,
      bracket.max - bracket.min
    );

    tax += taxAmountInBracket * bracket.rate;
    remainingIncome -= taxAmountInBracket;

    if (remainingIncome <= 0) {
      break;
    }
  }
  return tax;
}

closeResult(
  result,
  incomeInput,
  statusSelect,
  standardDeduction,
  standardDeductionDisplay,
  taxAmount
);
