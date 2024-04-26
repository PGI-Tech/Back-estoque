/* eslint-disable prettier/prettier */
/* eslnumber-disable prettier/prettier */
export class CreatePecasProntaDto {
    id_pecas_prontas?: number;
    id_classe: number;
    id_categoria?: number;
    descricao_peca?: string;
    id_tecido?: number;
    fornecedor?: string;
    cor?: string;
    estampa?: string;
    modelo?: string;
    ref?: string;
    detalhe?: string;
    cor_detalhe?: string;
    tamanho?: number;
    id_unidade?: number;
    marca?: string;
    estoque?: number;
    valor?: number;
    valor_estoque_total?: number;
    obs?: string;
    estoque_minimo?: number;
    em_falta?: string;
    data_compra?: Date;
}