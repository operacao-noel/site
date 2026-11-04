// Árvore da página inicial: se desenha conforme a página rola

const arvore = document.getElementById('arvore');
const tracos = arvore.querySelectorAll('[data-de]');
const estrela = document.getElementById('estrela');
const grupoBolinhas = document.getElementById('bolinhas');

// [x, y, cor] — posições das bolinhas na árvore
const BOLINHAS = [
  [158,152,'#E0523D'],[128,170,'#2F8A68'],[150,196,'#E0523D'],[186,214,'#2F8A68'],[212,228,'#E0523D'],
  [88,330,'#E0523D'],[238,345,'#2F8A68'],[62,385,'#2F8A68'],[262,388,'#E0523D'],[118,250,'#2F8A68'],[200,262,'#E0523D'],
];
const NS = 'http://www.w3.org/2000/svg';
const bolinhas = BOLINHAS.map(([x, y, cor]) => {
  const c = document.createElementNS(NS, 'circle');
  c.setAttribute('cx', x); c.setAttribute('cy', y); c.setAttribute('r', 0); c.setAttribute('fill', cor);
  grupoBolinhas.appendChild(c);
  return c;
});

tracos.forEach(el => { el.setAttribute('pathLength', 1); el.style.strokeDasharray = 1; });

const trecho = (p, de, ate) => Math.min(1, Math.max(0, (p - de) / (ate - de)));
const suave = t => 1 - Math.pow(1 - t, 3);

function atualizar() {
  const total = document.documentElement.scrollHeight - innerHeight;
  const p = total > 0 ? Math.min(1, Math.max(0, scrollY / total)) : 0;

  tracos.forEach(el => {
    el.style.strokeDashoffset = 1 - suave(trecho(p, +el.dataset.de, +el.dataset.ate));
  });
  bolinhas.forEach((c, i) => {
    const t = suave(trecho(p, 0.35 + i * 0.04, 0.42 + i * 0.04));
    c.setAttribute('r', 6 * t);
    c.style.opacity = t;
  });
  const s = suave(trecho(p, 0.82, 0.97));
  estrela.style.opacity = s;
  estrela.style.transform = `rotate(${(1 - s) * -120}deg) scale(${0.4 + 0.6 * s})`;
  arvore.style.top = (4 + p * 4) + 'vh';
}

addEventListener('scroll', atualizar, { passive: true });
addEventListener('resize', atualizar);
atualizar();
