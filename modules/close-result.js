export function closeResult(
  result,
  incomeInput,
  statusSelect,
  standardDeduction,
  standardDeductionDisplay,
  taxAmount
) {
  const closeButton = document.querySelector(".btn-close");
  closeButton.onclick = () => {
    result.classList.remove("show");
    result.classList.remove("animate");
    incomeInput.value = "";
    incomeInput.focus();
    statusSelect.value = "single";
    standardDeductionDisplay.textContent = `$${standardDeduction.single}`;
    taxAmount.textContent = "$0.00";
  };
}
