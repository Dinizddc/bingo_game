// Perguntar ao usuário quantas cartelas ele deseja
let quantidadeCartelas = 0;
while (
  quantidadeCartelas < 1 ||
  quantidadeCartelas > 5 ||
  isNaN(quantidadeCartelas)
) {
  quantidadeCartelas = parseInt(
    prompt(
      "Quantas cartelas você deseja gerar? (Digite um número entre 1 e 5)",
      "1"
    )
  );
  if (
    quantidadeCartelas < 1 ||
    quantidadeCartelas > 5 ||
    isNaN(quantidadeCartelas)
  ) {
    alert("Por favor, insira um número válido entre 1 e 5.");
  }
}

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

// Função para formatar números com zero à esquerda, se necessário
function formatarNumero(numero) {
  return numero < 10 ? "0" + numero : numero; // Adiciona o zero à frente se o número for menor que 10
}

// Função para preencher uma cartela com números aleatórios
function preencherCartela() {
  let numeros = gerarNumerosAleatorios(25); // Gerar 25 números para preencher a cartela
  let cartela = document.createElement("div");
  cartela.classList.add("cartela");

  // Preencher a cartela com os números
  let linhaIndex = 0;
  for (let i = 0; i < 5; i++) {
    let linha = document.createElement("div");
    linha.classList.add("linha");
    for (let j = 0; j < 5; j++) {
      let celula = document.createElement("div");
      celula.classList.add("celula");

      // Adicionar números nas células, exceto na célula central
      if (i !== 2 || j !== 2) {
        celula.textContent = formatarNumero(numeros[linhaIndex++]); // Aplica a formatação ao número
      } else {
        celula.classList.add("central");
        celula.innerHTML =
          '<img src="./icone/biblia logo.png" alt="Imagem Central" class="imagem">';
      }

      // Adicionar o evento de clique para marcar/desmarcar a célula
      celula.addEventListener("click", function () {
        // Verificar se a célula clicada é a central
        if (!celula.classList.contains("central")) {
          marcarCelula(celula);
        }
      });

      linha.appendChild(celula);
    }
    cartela.appendChild(linha);
  }

  // Adicionar a cartela ao corpo da página
  document.body.appendChild(cartela);
}

// Função para marcar/desmarcar uma célula
function marcarCelula(celula) {
  // Se a célula já estiver marcada, removemos a marcação
  if (celula.classList.contains("marcada")) {
    celula.classList.remove("marcada");
    celula.style.backgroundColor = ""; // Remover a cor vermelha
  } else {
    // Caso contrário, marcamos a célula
    celula.classList.add("marcada");
    celula.style.backgroundColor = "#BF3B3B"; // Colocar a cor vermelha
  }
}

// Gerar o número de cartelas solicitadas pelo usuário
for (let i = 0; i < quantidadeCartelas; i++) {
  preencherCartela();
}
