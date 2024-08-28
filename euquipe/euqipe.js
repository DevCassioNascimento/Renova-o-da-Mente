/*
	OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
	- passo 1 - dar um jeito de pegar o elemento HTML dos botões
	- passo 2 - dar um jeito de identificar o clique do usuário no botão
	- passo 3 - desmarcar o botão selecionado anterior
	- passo 4 - marcar o botão clicado como se estivesse selecionado
	- passo 5 - esconder a imagem anteriormente selecionada
	- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
	- passo 7 - esconder a informação do dragão anteriormente selecionado
	- passo 8 - mostrar a informação do dragão referente ao botão clicado
*/

//- passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

// - passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    // - passo 3 - desmarcar o botão selecionado anterior
    desativarBotaoSelecionado();

    // 	- passo 4 - marcar o botão clicado como se estivesse selecionado
    marcarBotaoSelecionado(botao);

    // - passo 5 - esconder a imagem anteriormente selecionada
    esconderImagemAtiva();

    // - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
    mostrarImagemDeFundo(indice);

    // - passo 7 - esconder a informação do dragão anteriormente selecionado
    esconderInformacoesAtivas();

    // - passo 8 - mostrar a informação do dragão referente ao botão clicado
    mostrarInformacoes(indice);
  });
});

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
  informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
  const informacoesAtiva = document.querySelector(".informacoes.ativa");
  informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}


// touch carrosel 

document.addEventListener('DOMContentLoaded', function() {
  const carrossel = document.querySelector('.carrossel');
  const imagens = document.querySelectorAll('.imagem');
  const botoes = document.querySelectorAll('.botoes-carrossel .botao');
  const descricoes = document.querySelectorAll('.informacoes');
  let indexAtual = 0;
  let startX;

  function showImage(index) {
      imagens.forEach(img => img.classList.remove('ativa'));
      botoes.forEach(botao => botao.classList.remove('selecionado'));
      descricoes.forEach(descricao => descricao.classList.remove('ativa'));

      imagens[index].classList.add('ativa');
      botoes[index].classList.add('selecionado');
      descricoes[index].classList.add('ativa');
  }

  carrossel.addEventListener('touchstart', function(e) {
      startX = e.touches[0].clientX;
  });

  carrossel.addEventListener('touchend', function(e) {
      const endX = e.changedTouches[0].clientX;
      const threshold = 50; // Mínima distância para considerar um swipe

      if (startX - endX > threshold) {
          // Swipe para a esquerda
          indexAtual = (indexAtual + 1) % imagens.length;
          showImage(indexAtual);
      } else if (endX - startX > threshold) {
          // Swipe para a direita
          indexAtual = (indexAtual - 1 + imagens.length) % imagens.length;
          showImage(indexAtual);
      }
  });
});
