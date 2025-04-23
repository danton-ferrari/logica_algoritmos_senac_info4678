function jogo() {
    var usuario = Number(document.getElementById("usuario").value);
    var maquina = Math.floor(Math.random() * 6);
    resultado = usuario == maquina ? alert("Você acertou o número sorteado "+usuario) : alert("Você errou o número sorteado "+maquina);
}