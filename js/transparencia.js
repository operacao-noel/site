// Cabeçalho, rodapé e valores que aparecem em várias páginas

const PAGINAS = [
  { id: 'inicio',        nome: 'Início',        arquivo: 'index.html' },
  { id: 'rota',          nome: 'Rota',          arquivo: 'rota.html' },
  { id: 'transparencia', nome: 'Transparência', arquivo: 'transparencia.html' },
  { id: 'time',          nome: 'Time',          arquivo: 'time.html' },
  { id: 'apoiadores',    nome: 'Apoiadores',    arquivo: 'apoiadores.html' },
];

// Logo desenhada direto no HTML (assim usa a fonte Montserrat da página)
const logoSVG = (arvore, presente, texto) => `
  <svg viewBox="0 0 590 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Operação Noel">
    <g transform="translate(-4,6) scale(0.565)"><g fill="none" stroke-width="7" stroke-linejoin="miter" stroke-linecap="square"><polygon points="150,14 156.5,33.1 176.6,33.3 160.5,45.4 166.5,64.7 150,53 133.5,64.7 139.5,45.4 123.4,33.3 143.5,33.1" stroke="${arvore}"/><path d="M150 72 L205 170 L186 170 L253 290 L232 290 L284 400 L16 400 L68 290 L47 290 L114 170 L95 170 Z" stroke="${arvore}"/><polyline points="185,134 108,182 221,232" stroke="${arvore}"/><path d="M134 403 V432 H166 V403" stroke="${arvore}"/><rect x="102" y="312" width="96" height="88" stroke="${presente}"/><rect x="94" y="294" width="112" height="18" stroke="${presente}"/><path d="M150 294 V400" stroke="${presente}"/><path d="M150 292 C138 268 116 272 124 286 C128 292 140 293 150 292 C160 293 172 292 176 286 C184 272 162 268 150 292 Z" stroke="${presente}" stroke-linejoin="round"/></g></g>
    <g font-family="Montserrat, sans-serif" fill="${texto}">
      <text x="200" y="104" font-size="54" font-weight="700" letter-spacing="1">OPERAÇÃO</text>
      <text x="194" y="222" font-size="116" font-weight="300" letter-spacing="4">NOEL</text>
    </g>
  </svg>`;

const reais = v => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
const paginaAtual = document.body.dataset.pagina;
const linkInsta = 'https://instagram.com/' + CONFIG.instagram;

document.getElementById('cabecalho').innerHTML = `
  <nav class="nav">
    <div class="container nav-interno">
      <a class="nav-logo" href="index.html">${logoSVG('#2F8A68', '#E0523D', '#1E4A3C')}</a>
      <div class="nav-links">
        ${PAGINAS.map(p => `<a href="${p.arquivo}" class="${p.id === paginaAtual ? 'ativo' : ''}">${p.nome}</a>`).join('')}
        <a class="btn btn-vermelho" href="doar.html">Doar</a>
      </div>
    </div>
  </nav>`;

document.getElementById('rodape').innerHTML = `
  <footer class="rodape">
    <div class="container rodape-interno">
      <div class="rodape-logo">${logoSVG('#7FC9A8', '#E0523D', '#F7F4EE')}</div>
      <div class="rodape-links">
        <a href="${linkInsta}" target="_blank">Instagram @${CONFIG.instagram}</a>
        <span>© ${new Date().getFullYear()} Operação Noel · Boituva/SP</span>
      </div>
    </div>
  </footer>`;

// Preenche qualquer elemento com estas classes, em qualquer página
const pct = Math.min(100, Math.round(CONFIG.arrecadado / CONFIG.meta * 100)) + '%';
const preencher = (sel, txt) => document.querySelectorAll(sel).forEach(el => el.textContent = txt);
preencher('.ano', new Date().getFullYear());
preencher('.arrecadado', reais(CONFIG.arrecadado));
preencher('.meta', reais(CONFIG.meta));
preencher('.pct-meta', pct);
document.querySelectorAll('.barra-preenchida').forEach(el => requestAnimationFrame(() => el.style.width = pct));
document.querySelectorAll('.link-vaquinha').forEach(a => a.href = CONFIG.vaquinhaUrl);
document.querySelectorAll('.link-insta').forEach(a => { a.href = linkInsta; a.textContent = 'Seguir @' + CONFIG.instagram; });
document.querySelectorAll('.link-email').forEach(a => a.href = 'mailto:' + CONFIG.email);

// Grade de postagens (página inicial)
const posts = document.getElementById('posts');
if (posts) posts.innerHTML = Array.from({ length: 6 }, () => `<a class="placeholder" style="aspect-ratio:1" href="${linkInsta}" target="_blank"></a>`).join('');
