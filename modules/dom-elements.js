export function getDomElements() {
  return {
    incomeInput: document.getElementById("income"),
    statusSelect: document.getElementById("status"),
    calculateButton: document.getElementById("calculate-button"),
    taxAmount: document.getElementById("tax-amount"),
    result: document.querySelector(".result"),
    standardDeductionDisplay: document.getElementById("standard-deduction"),
  };
}
