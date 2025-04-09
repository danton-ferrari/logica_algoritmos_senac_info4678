function calcularAno() {
    var ano = Number(document.getElementById("ano").value);
    resultado = ano%4==0 ? alert(`O ano de ${ano} é bissexto!`) : alert(`O ano de ${ano} não é bissexto!`);
}