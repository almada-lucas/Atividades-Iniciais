function verificarTriangulo() {
  var inLadoA = document.getElementById("inLadoA");
  var inLadoB = document.getElementById("inLadoB");
  var inLadoC = document.getElementById("inLadoC");
  var outResultado = document.getElementById("outResultado");
  var outTipo = document.getElementById("outTipo");

  var ladoA = Number(inLadoA.value);
  var ladoB = Number(inLadoB.value);
  var ladoC = Number(inLadoC.value);

  if (ladoA == "" || isNaN(ladoA)) {
    alert("Algum campo não foi preenchido corretamente!");
    inLadoA.focus()
    return;
  } else if (ladoB == "" || isNaN(ladoB)) {
    alert("Algum campo não foi preenchido corretamente!");
    inLadoB.focus()
    return;
  } else if (ladoC == "" || isNaN(ladoC)) {
    alert("Algum campo não foi preenchido corretamente!");
    inLadoC.focus()
    return;
  }

  if (ladoA > ladoB + ladoC) {
    outResultado.textContent = "Lados não podem formar um triângulo";
  } else if (ladoB > ladoA + ladoC) {
    outResultado.textContent = "Lados não podem formar um triângulo";
  } else if (ladoC > ladoA + ladoB) {
    outResultado.textContent = "Lados não podem formar um triângulo";
  } else {
    outResultado.textContent = "Lados podem formar um triângulo";
    if (ladoA == ladoB && ladoB == ladoC) {
      outTipo.textContent = "Tipo: Equilátero"
    } else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
      outTipo.textContent = "Tipo: Escaleno"
    } else {
      outTipo.textContent = "Tipo: Isósceles"
    }
  } 
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarTriangulo);