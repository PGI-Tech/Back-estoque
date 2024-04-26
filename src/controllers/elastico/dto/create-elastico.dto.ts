/* eslint-disable prettier/prettier */
/* eslnumber-disable prettier/prettier */
export class CreateElasticoDto {
    id_elastico: number;
    foto?: string;
    id_categoria?: number;
    id_tipo_elastico?: number;
    nome?: string;
    id_composicao?: number;
    fornecedor?: string;
    id_marca_elastico?: number;
    cor?: string;
    ref?: string;
    ref_numberer?: string;
    qr_code?: string;
    largura?: number;
    id_embalagem?: number;
    id_unidade?: number;
    estoque?: number;
    valor?: number;
    imposto?: number;
    preco_final?: number;
    valor_estoque_total?: number;
    aplicacao?: string;
    obs?: string;
    estoque_minimo?: number;
    em_falta?: string;
    data_compra?: Date;
}