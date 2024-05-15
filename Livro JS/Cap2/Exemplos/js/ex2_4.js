function calcularPreco() {
  var inQuilo = document.getElementById("inQuilo");
  var inConsumo = document.getElementById("inConsumo");
  var outValor = document.getElementById("outValor");

  var valorQuilo = Number(inQuilo.value);
  var consumo = Number(inConsumo.value);

  var valorFinal = valorQuilo * (consumo / 1000)

  outValor.textContent = "Valor a pagar R$: " + valorFinal.toFixed(2);
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPreco);