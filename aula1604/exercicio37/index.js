function salarioAtualizado() {
    var [salario, genero, tempo] = [Number(document.getElementById("salario").value), document.getElementById("genero").value, Number(document.getElementById("tempo").value)];
    if (genero == "mulher") {
        resultado = tempo < 15 ? alert(`O salário novo será de: R$${(salario*1.05).toFixed(2)}`) : tempo >= 15 && tempo < 20 ? alert(`O salário novo será de: R$${(salario*1.12).toFixed(2)}`) : alert(`O salário novo será de: R$${(salario*1.23).toFixed(2)}`);
    } else { resultado = tempo < 20 ? alert(`O salário novo será de: R$${(salario*1.03).toFixed(2)}`) : tempo >= 20 && tempo < 30 ? alert(`O salário novo será de: R$${(salario*1.13).toFixed(2)}`) : alert(`O salário novo será de: R$${(salario*1.25).toFixed(2)}`); }
}