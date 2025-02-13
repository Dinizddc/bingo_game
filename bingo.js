var numerosSorteados = [];

function sortear() {
    var numero;
    do {
        numero = Math.floor(Math.random() * 75) + 1;
    } while (numerosSorteados.includes(numero));
      
    var numeroSorteadoElemento = document.getElementById("numeroSorteado");
    numeroSorteadoElemento.style.fontSize = "60px";
    setTimeout(function() {
        numeroSorteadoElemento.textContent = numero;
        numeroSorteadoElemento.style.fontSize = "35px";
    }, 500);

    numerosSorteados.push(numero);
    exibirNumerosSorteados();
    
}

function exibirNumerosSorteados() {
    var numerosHTML = "";
    for (var i = 0; i < numerosSorteados.length; i++) {
        numerosHTML += "<li>" + numerosSorteados[i] + "</li>";
    }
    document.getElementById("numerosSorteados").innerHTML = numerosHTML;

    if (numerosSorteados.length === 75) {
        setTimeout(function() {
          alert("Todos os números foram sorteados!");
        }, 500);
    }
}
    
function reiniciar() {
    numerosSorteados = [];
    document.getElementById("numeroSorteado").textContent = "";
    document.getElementById("numerosSorteados").innerHTML = "";
}