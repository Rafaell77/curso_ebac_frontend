
const form = document.getElementById("form-deposit");
const btnDepositar = document.getElementById("btn-depositar");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const campoA = document.getElementById("campo-a").value;
  const campoB = document.getElementById("campo-b").value;

  if (campoB > campoA) {
    alert("Valor do campo B é maior que o campo A. Validação positiva!");
     } else {
    alert("Valor do campo B é menor que o  campo A. Validação negativa!");
  }

  document.getElementById("campo-a").value = "";
  document.getElementById("campo-b").value = "";
});
