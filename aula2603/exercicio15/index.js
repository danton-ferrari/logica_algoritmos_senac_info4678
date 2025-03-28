function calcularSalario(id) {
    var diasTrabalhados = Number(document.getElementById(id).value);
    alert(`Você receberá R$${(diasTrabalhados*8).toFixed(2)} pelos ${diasTrabalhados} dias trabalhados.`);
}