function aluguel() {
    var [estilo, dias, kms] = [document.getElementById("estilo").value, Number(document.getElementById("dias").value), Number(document.getElementById("kms").value)];
    if (estilo == "luxo") {
        resultado = kms <= 200 ? alert(`O valor do aluguel do veículo será de: R$${((dias*150)+(kms*0.3)).toFixed(2)}`) : alert(`O valor do aluguel do veículo será de: R$${((dias*150)+(kms*0.25)).toFixed(2)}`);
    } else { resultado = kms <= 100 ? alert(`O valor do aluguel do veículo será de: R$${((dias*90)+(kms*0.20)).toFixed(2)}`) : alert(`O valor do aluguel do veículo será de: R$${((dias*90)+(kms*0.10)).toFixed(2)}`); }
}