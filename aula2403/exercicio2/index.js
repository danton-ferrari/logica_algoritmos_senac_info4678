function somar(id1, id2) {
    var numero1 = document.getElementById(id1).value;
    var numero2 = document.getElementById(id2).value;
    var resultado = Number(numero1) + Number(numero2);
    alert(`A soma dos dois valores é ${resultado}`);
}
  
function subtrair(id1, id2) {
    var numero1 = document.getElementById(id1).value;
    var numero2 = document.getElementById(id2).value;
    var resultado = Number(numero1) - Number(numero2);
    alert(`A subtração dos dois valores é ${resultado}`);
}

function dividir(id1, id2) {
    var numero1 = document.getElementById(id1).value;
    var numero2 = document.getElementById(id2).value;
    var resultado = Number(numero1) / Number(numero2);
    alert(`A divisão dos dois valores é ${resultado}`);
}

function multiplicar(id1, id2) {
    var numero1 = document.getElementById(id1).value;
    var numero2 = document.getElementById(id2).value;
    var resultado = Number(numero1) * Number(numero2);
    alert(`A multiplicação dos dois valores é ${resultado}`);
}