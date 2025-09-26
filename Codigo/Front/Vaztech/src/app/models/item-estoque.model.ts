export type ItemEstoqueStatus = 'VENDIDO' | 'EM ESTOQUE' | 'ATENÇÃO';

export type ItemEstoque = {
  numeroSerie: number;
  produto: string;
  modelo: string;
  precoCusto: number;
  pessoaId: number; // depois muda pro model da pessoa talvez
  observacoes: string;
  dataCompra: Date;
  status: ItemEstoqueStatus;
  cor?: string;
};
