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
  
  // Função para preencher a cartela com números aleatórios
  function preencherCartela() {
    let numeros = gerarNumerosAleatorios(25); // Gerar 25 números para preencher a cartela
    let cartela = document.getElementById('cartela');
    
    // Preencher a cartela com os números
    let linhaIndex = 0;
    for (let i = 0; i < 5; i++) {
        let linha = cartela.querySelectorAll('.linha')[i];
        for (let j = 0; j < 5; j++) {
            let celula = linha.querySelectorAll('.celula')[j];
            
            // Adicionar números nas células, exceto na célula central
            if (i !== 2 || j !== 2) {
                celula.textContent = numeros[linhaIndex++];
            }
            
            // Adicionar o evento de clique para marcar/desmarcar a célula
            celula.addEventListener('click', function() {
                marcarCelula(celula);
            });
        }
    }
  }
  
  // Função para marcar/desmarcar uma célula
  function marcarCelula(celula) {
    // Se a célula já estiver marcada, removemos a marcação
    if (celula.classList.contains('marcada')) {
        celula.classList.remove('marcada');
        celula.style.backgroundColor = ''; // Remover a cor vermelha
    } else {
        // Caso contrário, marcamos a célula
        celula.classList.add('marcada');
        celula.style.backgroundColor = '#BF3B3B'; // Colocar a cor vermelha
    }
  }
  
  // Chamar a função para preencher a cartela ao carregar a página
  preencherCartela();
