function comparar() {
    var [numero1, numero2] = [Number(document.getElementById("numero1").value), Number(document.getElementById("numero2").value)];
    if (numero1 == numero2) {
        alert("Não existe valor maior, os dois números são iguais.");
    } else { var resposta = numero1 > numero2 ? alert("O primeiro número é maior que o segundo.") : alert("O segundo número é maior que o primeiro."); }
}