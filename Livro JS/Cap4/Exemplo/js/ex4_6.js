function verificarPrimos() {
  var inNumero = document.getElementById("inNumero");
  var outResultado = document.getElementById("outResultado");

  var num = Number(inNumero.value);

  if (num == 0 || isNaN(num)) {
    alert("Número Inválido...");
    inNumero.focus();
    return;
  }

  var numDivisores = 0

  for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
      numDivisores++;
    }
  }

  if (numDivisores == 2) {
    outResultado.textContent = num + " É primo";
  } else {
    outResultado.textContent = num + " Não é primo";
  }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarPrimos);