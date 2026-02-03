
export interface ProcessingResult {
  cliente_ficha: string;
  caso_resumo: string;
  analise_juridica: string;
  plano_acao: string;
  documentos: string;
  devolutiva: string;
  proposta: string;
  odoo_campos: string;
  pontos_criticos: string;
  perguntas: string;
}

export enum ProcessingStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
