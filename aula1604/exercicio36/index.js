function pontos() {
    var horas= Number(document.getElementById("horas").value);
    if (horas < 10) {
        alert(`O valor total de pontos é ${horas*2} e o valor a ser arrecadado é R$${((horas*2)*0.05).toFixed(2)}`)
    } else { resultado = horas < 20 ? alert(`O valor total de pontos é ${horas*5} e o valor a ser arrecadado é R$${((horas*5)*0.05).toFixed(2)}`) : alert(`O valor total de pontos é ${horas*10} e o valor a ser arrecadado é R$${((horas*10)*0.05).toFixed(2)}`); }
}