function salario() {
    var [nome, salario, tempoEmpresa] = [Number(document.getElementById("nome").value), Number(document.getElementById("salario").value), Number(document.getElementById("tempoEmpresa").value)];
    if (tempoEmpresa < 3) {
        alert(`Seu novo salário é R$${(salario*1.03).toFixed(2)}`)
    } else { var resposta = tempoEmpresa < 10 ? alert(`Seu novo salário é R$${(salario*1.125).toFixed(2)}`) : alert(`Seu novo salário é R$${(salario*1.2).toFixed(2)}`); }
}