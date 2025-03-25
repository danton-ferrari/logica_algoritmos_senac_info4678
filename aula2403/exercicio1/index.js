function somar(id) {
    var anoAtual = 2025;
    var idade = document.getElementById(id).value;
    var resultado = anoAtual - idade;
    alert(`Sua idade é ${resultado} anos!`);
  }