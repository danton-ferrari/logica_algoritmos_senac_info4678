function calcularSalario(id) {
    var diasTrabalhados = Number(document.getElementById(id).value);
    alert(`Você receberá R$${((diasTrabalhados*8)*25).toFixed(2)} pelos ${diasTrabalhados} dias trabalhados.`);
}