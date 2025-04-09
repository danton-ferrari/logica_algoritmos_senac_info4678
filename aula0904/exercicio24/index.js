function passagem() {
    var distancia = Number(document.getElementById("distancia").value);
    resultado = distancia <= 200 ? alert(`A distância a ser percorrida é de ${distancia}Km.\nO valor da passagem é R$${(distancia*0.5).toFixed(2)}`) : alert(`A distância a ser percorrida é de ${distancia}Km.\nO valor da passagem é R$${(distancia*0.45).toFixed(2)}`);
}