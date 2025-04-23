// function jogo() {
//     var usuario = Number(document.getElementById("usuario").value);
//     var maquina = Math.floor(Math.random() * 4);
//     if (usuario == maquina) {
//         alert("Empate!")
//     } else {
//         if (usuario == 1 && maquina == 2) {
//             alert("Você ganhou!")
//         }
//         else if (usuario == 1 && maquina == 3) {
//             alert("Você perdeu!");
//         }
//         else if (usuario == 2 && maquina == 1) {
//             alert("Você perdeu!");
//         }
//         else if (usuario == 2 && maquina == 3) {
//             alert("Você ganhou!");
//         }
//         else if (usuario == 3 && maquina == 2) {
//             alert("Você perdeu!");
//         }
//         else if (usuario == 3 && maquina == 1) {
//             alert("Você ganhou!");
//         }
//     }
// }

function jogo() {
    var usuario = Number(document.getElementById("usuario").value);
    var maquina = Math.floor(Math.random() * 4);
    if (usuario == maquina) {
        alert("Empate!")
    } else {
        switch(usuario) {
            case 1:
                if (maquina == 2) {
                    alert("Você ganhou!");
                } else { alert("Você perdeu!"); }
                break;
            case 2:
                if (maquina == 1) {
                    alert("Você perdeu!");
                } else { alert("Você ganhou!"); }
                break;
            case 3:
                if (maquina == 2) {
                    alert("Você perdeu!");
                } else { alert("Você ganhou!"); }
                break;
        }
    }
}