// ============================================================
//  DADOS DO SITE — edite aqui! Todas as páginas leem deste arquivo.
// ============================================================

const CONFIG = {
  vaquinhaUrl: 'https://www.vakinha.com.br/',   // link da vaquinha
  pix: 'chave-pix@exemplo.com',                 // chave Pix
  instagram: 'operacao.noel',                    // @ sem o arroba
  email: 'contato@exemplo.com',                 // e-mail para apoiadores
  arrecadado: 4000,                             // total arrecadado (R$)
  meta: 6000,                                   // meta (R$)
  valoresDeExemplo: true,                       // mude para false quando os dados forem reais
};

// Prestação de contas — cada gasto é uma linha
const GASTOS = [
  { data: '02/11', item: 'Brinquedos — lote 1',       categoria: 'Brinquedos', valor: 1400, nota: '' },
  { data: '09/11', item: 'Brinquedos — lote 2',       categoria: 'Brinquedos', valor: 1000, nota: '' },
  { data: '10/11', item: 'Papel de presente e fitas', categoria: 'Embalagens', valor: 320,  nota: '' },
  { data: '15/11', item: 'Impressão de cartazes',     categoria: 'Divulgação', valor: 150,  nota: '' },
  { data: '20/11', item: 'Fantasia de Noel',          categoria: 'Figurino',   valor: 280,  nota: '' },
  { data: '18/12', item: 'Combustível da rota',       categoria: 'Transporte', valor: 450,  nota: '' },
];
// Em "nota" coloque o link do comprovante (ex.: 'assets/notas/nota1.pdf')

// Rota
const LOCAIS = [
  { nome: 'Nome da instituição', bairro: 'Bairro · Boituva/SP', data: 'DATA A DEFINIR' },
  { nome: 'Nome da instituição', bairro: 'Bairro · Boituva/SP', data: 'DATA A DEFINIR' },
  { nome: 'Nome da instituição', bairro: 'Bairro · Boituva/SP', data: 'DATA A DEFINIR' },
  { nome: 'Nome da instituição', bairro: 'Bairro · Boituva/SP', data: 'DATA A DEFINIR' },
  { nome: 'Nome da instituição', bairro: 'Bairro · Boituva/SP', data: 'DATA A DEFINIR' },
];

// Time — em "foto" coloque o caminho da imagem (ex.: 'assets/time/joao.jpg')
const TIME = [
  { nome: 'Nome Sobrenome', papel: 'Coordenação',  foto: '' },
  { nome: 'Nome Sobrenome', papel: 'Arrecadação',  foto: '' },
  { nome: 'Nome Sobrenome', papel: 'Logística',    foto: '' },
  { nome: 'Nome Sobrenome', papel: 'Comunicação',  foto: '' },
  { nome: 'Nome Sobrenome', papel: 'Financeiro',   foto: '' },
  { nome: 'Nome Sobrenome', papel: 'Voluntariado', foto: '' },
];

// Apoiadores — em "logo" o caminho da imagem (ex.: 'assets/apoiadores/empresa.png')
const APOIADORES = [
  { nome: 'Apoiador', logo: '', site: '' },
  { nome: 'Apoiador', logo: '', site: '' },
  { nome: 'Apoiador', logo: '', site: '' },
  { nome: 'Apoiador', logo: '', site: '' },
  { nome: 'Apoiador', logo: '', site: '' },
  { nome: 'Apoiador', logo: '', site: '' },
  { nome: 'Apoiador', logo: '', site: '' },
  { nome: 'Apoiador', logo: '', site: '' },
];
