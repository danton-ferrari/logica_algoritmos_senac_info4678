function emprestimo() {
    var [casa, salario, prestacao] = [Number(document.getElementById("casa").value).toFixed(2), Number(document.getElementById("salario").value).toFixed(2), Number(document.getElementById("prestacao").value)];
    var parcela = (casa/prestacao).toFixed(2);
    resultado = (parcela) > (salario*0.3) ? alert("Não será possível realizar o empréstimo, o valor da parcela mensal ultrapassa 30% do seu salário atual!") : alert("Empréstimo aprovado!");
}