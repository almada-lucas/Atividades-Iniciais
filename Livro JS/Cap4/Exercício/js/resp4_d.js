function criarEstrelas() {
  var inNumero = document.getElementById("inNumero");
  var outEstrelas = document.getElementById("outEstrelas");

  var numero = Number(inNumero.value);

  if (numero == "" || isNaN(numero)) {
    alert("Campo Inválido...");
    inNumero.focus();
    return;
  }

  var resultado = "";
  var estrela = "";
  var e = 1;

  for (var i = 1; i <= numero; i++) {
    while (e <= i) {
      estrela = estrela + "*";
      e++;
    }
    resultado = resultado + estrela + "\n";
  }

  outEstrelas.textContent = resultado;
}
var btCriar = document.getElementById("btCriar");
btCriar.addEventListener("click", criarEstrelas);