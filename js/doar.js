// Logos dos apoiadores (dados em js/dados.js)

document.getElementById('lista-apoiadores').innerHTML = APOIADORES.map(a => {
  const conteudo = a.logo ? `<img src="${a.logo}" alt="${a.nome}">` : 'logo apoiador';
  return a.site
    ? `<a class="apoiador" href="${a.site}" target="_blank">${conteudo}</a>`
    : `<div class="apoiador">${conteudo}</div>`;
}).join('');
