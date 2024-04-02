/* eslint-disable prettier/prettier */
export class CreateLinhaDto {
    id_linha: number;
    foto?: string;
    id_categoria?: number;
    id_classe?: number;
    id_tipo_linha?: number;
    id_composicao?: number;
    fornecedor?: string;
    marca_linha?: string;
    cor?: string;
    ref?: string;
    num_pedido?: number;
    qr_code?: string;
    tamanho?: string;
    quantidade?: number;
    id_unidade?: number;
    id_embalagem?: number;
    estoque?: number;
    valor?: number;
    imposto?: number;
    preco_final?: number;
    valor_estoque_total?: number;
    obs?: string;
    estoque_minimo?: number;
    em_falta?: string;
    data_compra?: Date;
}
