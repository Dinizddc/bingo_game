var numerosSorteados = [];

// Função para formatar números com zero à esquerda se necessário
function formatarNumero(numero) {
  return numero < 10 ? "0" + numero : numero; // Adiciona o zero à frente se o número for menor que 10
}

// Função para exibir os números sorteados
function exibirNumerosSorteados() {
  var numerosHTML = "";

  // Cria a lista de números sorteados com a formatação necessária
  for (var i = 0; i < numerosSorteados.length; i++) {
    numerosHTML += "<li>" + formatarNumero(numerosSorteados[i]) + "</li>"; // Aplica a formatação aos números sorteados
  }

  // Exibe a lista de números sorteados no elemento com o id "numerosSorteados"
  document.getElementById("numerosSorteados").innerHTML = numerosHTML;

  // Atualiza a contagem de números sorteados no elemento com o id "contagemNumeros"
  document.getElementById("contagemNumeros").textContent =
    numerosSorteados.length; // Atualiza o número de sorteios
}

// Função para sortear um número
function sortear() {
  // Verifica se já foram sorteados todos os 75 números
  if (numerosSorteados.length === 75) {
    document.getElementById("botaoSortear").disabled = true; // Desabilita o botão de sorteio
    return; // Impede o sorteio de números após todos os 75 números terem sido sorteados
  }

  var numero;
  do {
    numero = Math.floor(Math.random() * 75) + 1;
  } while (numerosSorteados.includes(numero)); // Garante que o número não será sorteado mais de uma vez

  var numeroSorteadoElemento = document.getElementById("numeroSorteado");
  setTimeout(function () {
    numeroSorteadoElemento.textContent = formatarNumero(numero); // Exibe o número formatado
  }, 100); // Delay de 100ms para exibir o número sorteado

  // Atrasar a atualização da contagem de números sorteados
  setTimeout(function () {
    numerosSorteados.push(numero); // Adiciona o número sorteado à lista
    exibirNumerosSorteados(); // Exibe os números sorteados
  }, 100); // Delay de 100ms para atualizar a contagem após o número ser exibido
}

// Função para reiniciar o jogo
function reiniciar() {
  numerosSorteados = [];
  document.getElementById("numeroSorteado").textContent = "-";
  document.getElementById("numerosSorteados").innerHTML = "";
  document.getElementById("contagemNumeros").textContent = "0"; // Reseta a contagem
  document.getElementById("botaoSortear").disabled = false; // Habilita o botão novamente
}

// Quando a página estiver totalmente carregada, execute o código
window.onload = function () {
  // Adiciona o evento de clique ao botão de sorteio
  document.getElementById("botaoSortear").addEventListener("click", sortear);

  // Adiciona o evento de clique ao botão de reiniciar
  document
    .getElementById("botaoReiniciar")
    .addEventListener("click", reiniciar);
};
