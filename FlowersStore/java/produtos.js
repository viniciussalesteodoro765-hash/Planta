window.addEventListener('scroll', function () {
  // Altere '#rodape' para o ID ou classe do seu rodapé (ex: 'footer' ou '.footer')
  const rodape = document.querySelector('#rodape'); 
  
  // Seleciona os elementos flutuantes
  const botoesFlutuantes = document.querySelectorAll(
    '.vinicius-voltar-topo, .whatsapp-flutuante, .navegacao-secundaria'
  );

  if (!rodape) return;

  const rodapePosicao = rodape.getBoundingClientRect().top;
  const alturaJanela = window.innerHeight;

  // Se o topo do rodapé aparecer no ecrã, esconde os botões
  if (rodapePosicao <= alturaJanela) {
    botoesFlutuantes.forEach(el => el.classList.add('esconder-flutuantes'));
  } else {
    botoesFlutuantes.forEach(el => el.classList.remove('esconder-flutuantes'));
  }
});