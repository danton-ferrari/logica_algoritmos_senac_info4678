function calcularMedia(id1, id2) {
    var media = (Number(document.getElementById(id1).value)+Number(document.getElementById(id2).value))/2;
    resultado = media >= 7 ? alert(`Sua média é ${media.toFixed(2)}, você teve um bom aproveitamento.`) : alert(`Sua média é ${media.toFixed(2)}, você não teve um bom aproveitamento.`);
}