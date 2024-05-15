function numerosDecrescentes() {
  var inNumero = document.getElementById("inNumero");
  var outResultado = document.getElementById("outResultado");

  var numero = Number(inNumero.value);

  if (numero == 0 || isNaN(numero)) {
    alert("Informe um número válido...");
    inNumero.focus();
    return;
  }

  var resposta = "Entre " + numero + " e 1: ";

  for (var i = numero; i > 1; i = i - 1) {
    resposta = resposta + i + ", ";
  }

  resposta = resposta + i + ".";

  outResultado.textContent = resposta;
}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", numerosDecrescentes);