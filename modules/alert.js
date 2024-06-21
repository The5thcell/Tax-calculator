export function alertComp(massage = "Invalid input") {
  const alert = document.querySelector(".alert");
  alert.classList.add("show");
  alert.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${massage} <i class="fa-solid fa-triangle-exclamation"></i>`;

  setTimeout(() => {
    alert.classList.remove("show");
  }, 3000);
}
