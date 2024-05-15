function calcularNotas() {
  var inValor = document.getElementById("inValor");
  var outNota100 = document.getElementById("outNota100");
  var outNota50 = document.getElementById("outNota50");
  var outNota10 = document.getElementById("outNota10");

  var valor = Number(inValor.value);

  outNota100.textContent = "";
  outNota50.textContent = "";
  outNota10.textContent = "";

  var saque = Number(inValor.value);

  if (saque == 0 || isNaN(saque)) {
    alert("Irforme o valor do saque corretamente");
    inValor.focus();
    return;
  }

  if (saque % 10 != 0) {
    alert("Valor inválido para notas disponíveis (R$ 10, 50,100)")
    inValor.focus();
    return;
  }

  var notas100 = Math.floor(saque / 100);
  var resto = saque % 100;
  var notas50 = Math.floor(resto / 50);
  resto = resto % 50;
  var notas10 = Math.floor(resto / 10);

  if (notas100 > 0) {
    outNota100.textContent = "Notas de R$ 100: " + notas100;
  }

  if (notas50 > 0) {
    outNota50.textContent = "Notas de R$ 50: " + notas50;
  }

  if (notas10 > 0) {
    outNota10.textContent = "Notas de R$ 10: " + notas10;
  }
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularNotas);