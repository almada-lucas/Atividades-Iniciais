function calcularValor() {
  var inValor = document.getElementById("inValor");
  var inTempo = document.getElementById("inTempo");
  var outValor = document.getElementById("outValor");

  var valor = Number(inValor.value);
  var tempo = Number(inTempo.value);

  var total = valor * Math.ceil(tempo / 15);

  outValor.textContent = "Valor a Pagar R$: " + total.toFixed(2);
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularValor);