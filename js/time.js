// Página de doação (dados em js/dados.js)

document.getElementById('chave-pix').textContent = CONFIG.pix;

const botaoPix = document.getElementById('copiar-pix');
botaoPix.addEventListener('click', () => {
  navigator.clipboard.writeText(CONFIG.pix);
  botaoPix.textContent = 'Chave copiada ✓';
  setTimeout(() => botaoPix.textContent = 'Copiar chave Pix', 2000);
});
