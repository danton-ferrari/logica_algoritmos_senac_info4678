function lerMenssagem(id1, id2) {
    var nome = document.getElementById(id1).value;
    var salario = Number(document.getElementById(id2).value).toFixed(2);
    alert(`O funcionário ${nome} tem um salário de R$${salario} em Junho.`);
}