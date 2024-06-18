const comprarButton = document.getElementById("comprarButton");
const sumarRestarButtons = document.getElementById("sumarRestarButtons");
const sumarButton = document.getElementById("sumarButton");
const restarButton = document.getElementById("restarButton");
const cantidadSpan = document.getElementById("cantidad");
let cantidad = 1;

comprarButton.addEventListener("click", () => {
  comprarButton.style.display = "none";
  sumarRestarButtons.style.display = "inline-block";
});

sumarButton.addEventListener("click", () => {
  cantidad++;
  cantidadSpan.textContent = cantidad;
});

restarButton.addEventListener("click", () => {
  cantidad--;
  if (cantidad < 1) {
    cantidad = 1;
    sumarRestarButtons.style.display = "none";
    comprarButton.style.display = "inline-block";
  }
  cantidadSpan.textContent = cantidad;
});

