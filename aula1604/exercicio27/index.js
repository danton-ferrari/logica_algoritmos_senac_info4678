function media() {
    var [nota1, nota2] = [Number(document.getElementById("nota1").value), Number(document.getElementById("nota2").value)];
    var media = (nota1+nota2)/2;
    if (media.toFixed(1) < 5.0) {
        alert(`Sua média é ${media}, você está reprovado!`)
    } else { var resposta = media.toFixed(1) >= 7 ? alert(`Sua média é ${media}, você está aprovado!`) : alert(`Sua média é ${media}, você está em recuperação!`); }
}