function metros2() {
    var [largura, comprimento] = [Number(document.getElementById("largura").value), Number(document.getElementById("comprimento").value)];
    var m2 = largura*comprimento;
    if (m2 <= 100) {
        alert("Terreno Popular.");
    } else { var resposta = m2 < 500 ? alert("Terreno Master.") : alert("Terreno VIP."); }
}