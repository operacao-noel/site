# Site Operação Noel

## Estrutura
```
index.html          → página inicial (com a árvore animada)
rota.html           → locais
transparencia.html  → prestação de contas
time.html           → nosso time
apoiadores.html     → apoiadores
doar.html           → vaquinha + Pix

css/style.css       → todo o visual (cores no topo, em :root)
js/dados.js         → ★ TEXTOS E NÚMEROS: gastos, locais, time, apoiadores, Pix, vaquinha
js/layout.js        → menu e rodapé (iguais em todas as páginas)
js/arvore.js        → animação da árvore
js/<pagina>.js      → lógica de cada página
assets/             → logos e imagens
```

## Editar
- Quase tudo se muda em **js/dados.js**.
- Textos fixos (ex.: motivação) ficam direto no HTML da página.
- Fotos: coloque em `assets/time/` e escreva o caminho em `foto` no dados.js.
- Para ver no VS Code: instale a extensão **Live Server** → botão direito no index.html → *Open with Live Server*.

## Publicar (GitHub Pages, grátis)
Suba **todos os arquivos e pastas** no repositório → Settings → Pages → Branch `main` / root → Save.
