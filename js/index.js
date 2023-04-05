console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const newToast = document.createElement("div");
  newToast.classList.add("toast");
  newToast.textContent = "A new toast message";

  toastContainer.appendChild(newToast);
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";
});
