// Função para gerar números aleatórios sem repetição
function gerarNumerosAleatorios(totalNumeros) {
  let numeros = [];
  while (numeros.length < totalNumeros) {
    let numero = Math.floor(Math.random() * 75) + 1;
    if (!numeros.includes(numero)) {
      numeros.push(numero);
    }
  }
  return numeros;
}

// Função para preencher as células com números aleatórios
function preencherCartela() {
  let numeros = gerarNumerosAleatorios(24); // Gerar 24 números aleatórios (excluindo o central)
  let cartela = document.getElementById('cartela');
  let celulas = cartela.querySelectorAll('.celula');

  // Preencher as células com números aleatórios (*)
  let index = 0;
  celulas.forEach(function(celula) {
    if (!celula.classList.contains('central')) {
      celula.textContent = numeros[index];
      index++;
    }
  });
}

// Chamar a função para preencher a cartela ao carregar a página
preencherCartela();