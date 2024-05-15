function verificarNumero() {
  var inNumero = document.getElementById("inNumero");
  var outDivisores = document.getElementById("outDivisores");
  var outResultado = document.getElementById("outResultado");

  var numero = Number(inNumero.value);

  if (numero == "" || isNaN(numero) || numero == 0 || numero == 1) {
    alert("Campo Inválido...");
    inNumero.focus();
    return;
  }

  var divisores = 1;
  var resposta = "Divisores do " + numero + ": 1"; 

  for (var i = 2; i <= numero / 2; i++) {
    if (numero % i == 0) {
      resposta = resposta + ", " + i;
      divisores = divisores + i;
    }
  }
  resposta = resposta +" (Soma: " + divisores + ")";  

  if (numero == divisores) {
    outDivisores.textContent = resposta;
    outResultado.textContent = numero + " É um Número Perfeito";
  } else {
    outDivisores.textContent = resposta;
    outResultado.textContent = numero + " Não é um Número Perfeito";
  }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarNumero);