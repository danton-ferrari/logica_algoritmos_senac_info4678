function calcularVelocidade(id) {
    var velocidade = Number(document.getElementById(id).value);
    resultado = velocidade > 80 ? alert(`Sua velocidade é ${velocidade}Km/h. \nSua multa é do valor R$${((velocidade-80)*5).toFixed(2)}`) : alert(`Você está dentro da velocidade permitida!`);
}