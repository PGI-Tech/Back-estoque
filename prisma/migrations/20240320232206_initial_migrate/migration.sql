-- CreateTable
CREATE TABLE "classe" (
    "id_classe" SERIAL NOT NULL,
    "classe" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "classe_pkey" PRIMARY KEY ("id_classe")
);

-- CreateTable
CREATE TABLE "categoria" (
    "id_categoria" SERIAL NOT NULL,
    "categoria" TEXT NOT NULL,

    CONSTRAINT "categoria_pkey" PRIMARY KEY ("id_categoria")
);

-- CreateTable
CREATE TABLE "peca" (
    "id_peca" SERIAL NOT NULL,
    "peca" TEXT NOT NULL,

    CONSTRAINT "peca_pkey" PRIMARY KEY ("id_peca")
);

-- CreateTable
CREATE TABLE "maquina_agulha" (
    "id_maquina_agulha" SERIAL NOT NULL,
    "maquina" TEXT NOT NULL,

    CONSTRAINT "maquina_agulha_pkey" PRIMARY KEY ("id_maquina_agulha")
);

-- CreateTable
CREATE TABLE "especie_agulha" (
    "id_especie_agulha" SERIAL NOT NULL,
    "especie" TEXT NOT NULL,

    CONSTRAINT "especie_agulha_pkey" PRIMARY KEY ("id_especie_agulha")
);

-- CreateTable
CREATE TABLE "marca_agulha" (
    "id_marca_agulha" SERIAL NOT NULL,
    "marca" TEXT NOT NULL,

    CONSTRAINT "marca_agulha_pkey" PRIMARY KEY ("id_marca_agulha")
);

-- CreateTable
CREATE TABLE "marca_movel" (
    "id_marca_movel" SERIAL NOT NULL,
    "marca" TEXT NOT NULL,

    CONSTRAINT "marca_movel_pkey" PRIMARY KEY ("id_marca_movel")
);

-- CreateTable
CREATE TABLE "marca_insumo" (
    "id_marca_insumo" SERIAL NOT NULL,
    "insumo" TEXT NOT NULL,

    CONSTRAINT "marca_insumo_pkey" PRIMARY KEY ("id_marca_insumo")
);

-- CreateTable
CREATE TABLE "marca_maquina" (
    "id_marca_maquina" SERIAL NOT NULL,
    "maquina" TEXT NOT NULL,

    CONSTRAINT "marca_maquina_pkey" PRIMARY KEY ("id_marca_maquina")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id_usuario" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "id_permissao" INTEGER NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "tipo_elastico" (
    "id_tipo_elastico" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "tipo_elastico_pkey" PRIMARY KEY ("id_tipo_elastico")
);

-- CreateTable
CREATE TABLE "tipo_insumo" (
    "id_tipo_insumo" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "tipo_insumo_pkey" PRIMARY KEY ("id_tipo_insumo")
);

-- CreateTable
CREATE TABLE "tipo_maquina" (
    "id_tipo_maquina" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "tipo_maquina_pkey" PRIMARY KEY ("id_tipo_maquina")
);

-- CreateTable
CREATE TABLE "tipo_movel" (
    "id_tipo_movel" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "tipo_movel_pkey" PRIMARY KEY ("id_tipo_movel")
);

-- CreateTable
CREATE TABLE "unidade" (
    "id_unidade" SERIAL NOT NULL,
    "unidade" TEXT NOT NULL,
    "sigla" TEXT NOT NULL,

    CONSTRAINT "unidade_pkey" PRIMARY KEY ("id_unidade")
);

-- CreateTable
CREATE TABLE "permissao" (
    "id_permissao" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "permissao_pkey" PRIMARY KEY ("id_permissao")
);

-- CreateTable
CREATE TABLE "composicao" (
    "id_composicao" SERIAL NOT NULL,
    "composicao" TEXT NOT NULL,

    CONSTRAINT "composicao_pkey" PRIMARY KEY ("id_composicao")
);

-- CreateTable
CREATE TABLE "marca_elastico" (
    "id_marca_elastico" SERIAL NOT NULL,
    "marca" TEXT NOT NULL,

    CONSTRAINT "marca_elastico_pkey" PRIMARY KEY ("id_marca_elastico")
);

-- CreateTable
CREATE TABLE "tipo_linha" (
    "id_tipo_linha" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "tipo_linha_pkey" PRIMARY KEY ("id_tipo_linha")
);

-- CreateTable
CREATE TABLE "embalagem" (
    "id_embalagem" SERIAL NOT NULL,
    "embalagem" TEXT NOT NULL,

    CONSTRAINT "embalagem_pkey" PRIMARY KEY ("id_embalagem")
);

-- CreateTable
CREATE TABLE "elastico" (
    "id_elastico" SERIAL NOT NULL,
    "foto" TEXT NOT NULL,
    "id_categoria" INTEGER NOT NULL,
    "id_tipo_elastico" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "id_composicao" INTEGER NOT NULL,
    "fornecedor" TEXT NOT NULL,
    "id_marca_elastico" INTEGER NOT NULL,
    "cor" TEXT NOT NULL,
    "ref" TEXT NOT NULL,
    "ref_inter" TEXT NOT NULL,
    "qr_code" TEXT NOT NULL,
    "largura" INTEGER NOT NULL,
    "id_embalagem" INTEGER NOT NULL,
    "id_unidade" INTEGER NOT NULL,
    "estoque" INTEGER NOT NULL,
    "valor" INTEGER NOT NULL,
    "imposto" INTEGER NOT NULL,
    "preco_final" INTEGER NOT NULL,
    "valor_estoque_total" INTEGER NOT NULL,
    "aplicacao" TEXT NOT NULL,
    "obs" TEXT NOT NULL,
    "estoque_minimo" INTEGER NOT NULL,
    "em_falta" TEXT NOT NULL,
    "data_compra" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "elastico_pkey" PRIMARY KEY ("id_elastico")
);

-- CreateTable
CREATE TABLE "linha" (
    "id_linha" SERIAL NOT NULL,
    "foto" TEXT NOT NULL,
    "id_categoria" INTEGER NOT NULL,
    "id_classe" INTEGER NOT NULL,
    "id_tipo_linha" INTEGER NOT NULL,
    "id_composicao" INTEGER NOT NULL,
    "fornecedor" TEXT NOT NULL,
    "marca_linha" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "ref" TEXT NOT NULL,
    "num_pedido" INTEGER NOT NULL,
    "qr_code" TEXT NOT NULL,
    "tamanho" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "id_unidade" INTEGER NOT NULL,
    "id_embalagem" INTEGER NOT NULL,
    "estoque" INTEGER NOT NULL,
    "valor" INTEGER NOT NULL,
    "imposto" INTEGER NOT NULL,
    "preco_final" INTEGER NOT NULL,
    "valor_estoque_total" INTEGER NOT NULL,
    "obs" TEXT NOT NULL,
    "estoque_minimo" INTEGER NOT NULL,
    "em_falta" TEXT NOT NULL,
    "data_compra" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "linha_pkey" PRIMARY KEY ("id_linha")
);

-- CreateTable
CREATE TABLE "tecido" (
    "id_tecido" SERIAL NOT NULL,
    "foto" TEXT NOT NULL,
    "id_categoria" INTEGER NOT NULL,
    "id_classe" INTEGER NOT NULL,
    "tipo_tecido" TEXT NOT NULL,
    "id_composicao" INTEGER NOT NULL,
    "fornecedor" TEXT NOT NULL,
    "marca_linha" TEXT NOT NULL,
    "importado" TEXT NOT NULL,
    "estampado" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "estampa" TEXT NOT NULL,
    "ref" TEXT NOT NULL,
    "num_pedido" INTEGER NOT NULL,
    "qr_code" TEXT NOT NULL,
    "ramado" TEXT NOT NULL,
    "plano" TEXT NOT NULL,
    "largura" INTEGER NOT NULL,
    "gramatura" INTEGER NOT NULL,
    "id_unidade" INTEGER NOT NULL,
    "rendimento" INTEGER NOT NULL,
    "tamanho" TEXT NOT NULL,
    "qantidade" INTEGER NOT NULL,
    "id_embalagem" INTEGER NOT NULL,
    "estoque" INTEGER NOT NULL,
    "valor" INTEGER NOT NULL,
    "imposto" INTEGER NOT NULL,
    "preco_final" INTEGER NOT NULL,
    "valor_estoque_total" INTEGER NOT NULL,
    "aplicacao" TEXT NOT NULL,
    "obs" TEXT NOT NULL,
    "estoque_minimo" INTEGER NOT NULL,
    "em_falta" TEXT NOT NULL,
    "data_compra" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tecido_pkey" PRIMARY KEY ("id_tecido")
);

-- CreateTable
CREATE TABLE "agulha" (
    "id_agulha" SERIAL NOT NULL,
    "id_classe" INTEGER NOT NULL,
    "foto" TEXT NOT NULL,
    "id_categoria" INTEGER NOT NULL,
    "id_maquina_agulha" INTEGER NOT NULL,
    "id_especie_agulha" INTEGER NOT NULL,
    "fornecedor" TEXT NOT NULL,
    "id_marca_agulha" INTEGER NOT NULL,
    "ref" TEXT NOT NULL,
    "num_pedido" INTEGER NOT NULL,
    "qr_code" TEXT NOT NULL,
    "tamanho" TEXT NOT NULL,
    "estoque" INTEGER NOT NULL,
    "id_unidade" INTEGER NOT NULL,
    "valor" INTEGER NOT NULL,
    "imposto" INTEGER NOT NULL,
    "preco_final" INTEGER NOT NULL,
    "valor_estoque_total" INTEGER NOT NULL,
    "aplicacao" TEXT NOT NULL,
    "obs" TEXT NOT NULL,
    "estoque_minimo" INTEGER NOT NULL,
    "em_falta" TEXT NOT NULL,
    "data_compra" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "agulha_pkey" PRIMARY KEY ("id_agulha")
);

-- CreateTable
CREATE TABLE "movel" (
    "id_movel" SERIAL NOT NULL,
    "id_classe" INTEGER NOT NULL,
    "id_categoria" INTEGER NOT NULL,
    "id_tipo_movel" INTEGER NOT NULL,
    "id_composicao" INTEGER NOT NULL,
    "fornecedor" TEXT NOT NULL,
    "id_marca_movel" INTEGER NOT NULL,
    "cor" TEXT NOT NULL,
    "estoque" INTEGER NOT NULL,
    "valor" INTEGER NOT NULL,
    "imposto" INTEGER NOT NULL,
    "preco_final" INTEGER NOT NULL,
    "valor_estoque_total" INTEGER NOT NULL,
    "aplicacao" TEXT NOT NULL,
    "obs" TEXT NOT NULL,
    "estoque_minimo" INTEGER NOT NULL,
    "em_falta" TEXT NOT NULL,
    "data_compra" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "movel_pkey" PRIMARY KEY ("id_movel")
);

-- CreateTable
CREATE TABLE "insumo" (
    "id_insumo" SERIAL NOT NULL,
    "id_classe" INTEGER NOT NULL,
    "id_categoria" INTEGER NOT NULL,
    "id_tipo_insumo" INTEGER NOT NULL,
    "id_composicao" INTEGER NOT NULL,
    "fornecedor" TEXT NOT NULL,
    "id_marca_insumo" INTEGER NOT NULL,
    "cor" TEXT NOT NULL,
    "ref" TEXT NOT NULL,
    "ref_inter" TEXT NOT NULL,
    "qr_code" TEXT NOT NULL,
    "tamanho" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "embalagem" TEXT NOT NULL,
    "estoque" TEXT NOT NULL,
    "valor" INTEGER NOT NULL,
    "imposto" INTEGER NOT NULL,
    "preco_final" INTEGER NOT NULL,
    "valor_estoque_total" INTEGER NOT NULL,
    "aplicacao" TEXT NOT NULL,
    "obs" TEXT NOT NULL,
    "estoque_minimo" TEXT NOT NULL,
    "em_falta" TEXT NOT NULL,
    "data_compra" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "insumo_pkey" PRIMARY KEY ("id_insumo")
);

-- CreateTable
CREATE TABLE "maquina" (
    "id_maquina" SERIAL NOT NULL,
    "id_classe" INTEGER NOT NULL,
    "id_categoria" INTEGER NOT NULL,
    "id_tipo_maquina" INTEGER NOT NULL,
    "fornecedor" TEXT NOT NULL,
    "id_marca_maquina" INTEGER NOT NULL,
    "cor" TEXT NOT NULL,
    "ref" TEXT NOT NULL,
    "ref_inter" TEXT NOT NULL,
    "qr_code" TEXT NOT NULL,
    "estoque" TEXT NOT NULL,
    "valor" INTEGER NOT NULL,
    "imposto" INTEGER NOT NULL,
    "preco_final" INTEGER NOT NULL,
    "valor_estoque_total" INTEGER NOT NULL,
    "aplicacao" TEXT NOT NULL,
    "obs" TEXT NOT NULL,
    "estoque_minimo" INTEGER NOT NULL,
    "em_falta" TEXT NOT NULL,
    "data_compra" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "maquina_pkey" PRIMARY KEY ("id_maquina")
);

-- CreateTable
CREATE TABLE "pecas_prontas" (
    "id_pecas_prontas" SERIAL NOT NULL,
    "id_classe" INTEGER NOT NULL,
    "id_categoria" INTEGER NOT NULL,
    "id_peca" INTEGER NOT NULL,
    "id_tecido" INTEGER NOT NULL,
    "fornecedor" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "estampa" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "ref" TEXT NOT NULL,
    "detalhe" TEXT NOT NULL,
    "cor_detalhe" TEXT NOT NULL,
    "tamanho" TEXT NOT NULL,
    "id_unidade" INTEGER NOT NULL,
    "marca" TEXT NOT NULL,
    "estoque" TEXT NOT NULL,
    "valor" INTEGER NOT NULL,
    "valor_estoque_total" INTEGER NOT NULL,
    "obs" TEXT NOT NULL,
    "estoque_minimo" INTEGER NOT NULL,
    "em_falta" TEXT NOT NULL,
    "data_compra" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pecas_prontas_pkey" PRIMARY KEY ("id_pecas_prontas")
);

-- CreateTable
CREATE TABLE "corte" (
    "id_corte" SERIAL NOT NULL,
    "id_classe" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "ref" TEXT NOT NULL,
    "id_peca" INTEGER NOT NULL,
    "id_tecido" INTEGER NOT NULL,
    "modelo" TEXT NOT NULL,
    "pedido" TEXT NOT NULL,
    "risco" TEXT NOT NULL,
    "peso" TEXT NOT NULL,
    "rendimento" TEXT NOT NULL,
    "pecas" TEXT NOT NULL,
    "aproveitamento" TEXT NOT NULL,
    "rolos" INTEGER NOT NULL,
    "camadas" INTEGER NOT NULL,
    "total_pecas" INTEGER NOT NULL,
    "infantil" INTEGER NOT NULL,
    "adulto" INTEGER NOT NULL,
    "extra" INTEGER NOT NULL,
    "marca" TEXT NOT NULL,
    "vrl_custo" TEXT NOT NULL,
    "vlr_venda" TEXT NOT NULL,
    "lucro" TEXT NOT NULL,

    CONSTRAINT "corte_pkey" PRIMARY KEY ("id_corte")
);

-- CreateTable
CREATE TABLE "costura" (
    "id_costura" SERIAL NOT NULL,
    "id_classe" INTEGER NOT NULL,
    "id_categoria" INTEGER NOT NULL,
    "id_peca" INTEGER NOT NULL,
    "id_tecido" INTEGER NOT NULL,
    "fornecedor" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "estampa" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "ref" TEXT NOT NULL,
    "detalhe" TEXT NOT NULL,
    "cor_detalhe" TEXT NOT NULL,
    "tamanho" TEXT NOT NULL,
    "id_unidade" INTEGER NOT NULL,
    "marca" TEXT NOT NULL,
    "data_corte" TIMESTAMP(3) NOT NULL,
    "total" INTEGER NOT NULL,
    "data_entrada" TIMESTAMP(3) NOT NULL,
    "costura" TEXT NOT NULL,
    "data_saida" TIMESTAMP(3) NOT NULL,
    "falta" TEXT NOT NULL,
    "obs" TEXT NOT NULL,

    CONSTRAINT "costura_pkey" PRIMARY KEY ("id_costura")
);

-- CreateIndex
CREATE UNIQUE INDEX "classe_classe_key" ON "classe"("classe");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_username_key" ON "usuario"("username");

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_id_permissao_fkey" FOREIGN KEY ("id_permissao") REFERENCES "permissao"("id_permissao") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "elastico" ADD CONSTRAINT "elastico_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categoria"("id_categoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "elastico" ADD CONSTRAINT "elastico_id_unidade_fkey" FOREIGN KEY ("id_unidade") REFERENCES "unidade"("id_unidade") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "elastico" ADD CONSTRAINT "elastico_id_embalagem_fkey" FOREIGN KEY ("id_embalagem") REFERENCES "embalagem"("id_embalagem") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "elastico" ADD CONSTRAINT "elastico_id_marca_elastico_fkey" FOREIGN KEY ("id_marca_elastico") REFERENCES "marca_elastico"("id_marca_elastico") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "elastico" ADD CONSTRAINT "elastico_id_composicao_fkey" FOREIGN KEY ("id_composicao") REFERENCES "composicao"("id_composicao") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "elastico" ADD CONSTRAINT "elastico_id_tipo_elastico_fkey" FOREIGN KEY ("id_tipo_elastico") REFERENCES "tipo_elastico"("id_tipo_elastico") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "linha" ADD CONSTRAINT "linha_id_embalagem_fkey" FOREIGN KEY ("id_embalagem") REFERENCES "embalagem"("id_embalagem") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "linha" ADD CONSTRAINT "linha_id_unidade_fkey" FOREIGN KEY ("id_unidade") REFERENCES "unidade"("id_unidade") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "linha" ADD CONSTRAINT "linha_id_composicao_fkey" FOREIGN KEY ("id_composicao") REFERENCES "composicao"("id_composicao") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "linha" ADD CONSTRAINT "linha_id_tipo_linha_fkey" FOREIGN KEY ("id_tipo_linha") REFERENCES "tipo_linha"("id_tipo_linha") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "linha" ADD CONSTRAINT "linha_id_classe_fkey" FOREIGN KEY ("id_classe") REFERENCES "classe"("id_classe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "linha" ADD CONSTRAINT "linha_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categoria"("id_categoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecido" ADD CONSTRAINT "tecido_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categoria"("id_categoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecido" ADD CONSTRAINT "tecido_id_unidade_fkey" FOREIGN KEY ("id_unidade") REFERENCES "unidade"("id_unidade") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecido" ADD CONSTRAINT "tecido_id_classe_fkey" FOREIGN KEY ("id_classe") REFERENCES "classe"("id_classe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecido" ADD CONSTRAINT "tecido_id_composicao_fkey" FOREIGN KEY ("id_composicao") REFERENCES "composicao"("id_composicao") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecido" ADD CONSTRAINT "tecido_id_embalagem_fkey" FOREIGN KEY ("id_embalagem") REFERENCES "embalagem"("id_embalagem") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agulha" ADD CONSTRAINT "agulha_id_classe_fkey" FOREIGN KEY ("id_classe") REFERENCES "classe"("id_classe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agulha" ADD CONSTRAINT "agulha_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categoria"("id_categoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agulha" ADD CONSTRAINT "agulha_id_maquina_agulha_fkey" FOREIGN KEY ("id_maquina_agulha") REFERENCES "maquina_agulha"("id_maquina_agulha") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agulha" ADD CONSTRAINT "agulha_id_especie_agulha_fkey" FOREIGN KEY ("id_especie_agulha") REFERENCES "especie_agulha"("id_especie_agulha") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agulha" ADD CONSTRAINT "agulha_id_marca_agulha_fkey" FOREIGN KEY ("id_marca_agulha") REFERENCES "marca_agulha"("id_marca_agulha") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agulha" ADD CONSTRAINT "agulha_id_unidade_fkey" FOREIGN KEY ("id_unidade") REFERENCES "unidade"("id_unidade") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movel" ADD CONSTRAINT "movel_id_classe_fkey" FOREIGN KEY ("id_classe") REFERENCES "classe"("id_classe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movel" ADD CONSTRAINT "movel_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categoria"("id_categoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movel" ADD CONSTRAINT "movel_id_tipo_movel_fkey" FOREIGN KEY ("id_tipo_movel") REFERENCES "tipo_movel"("id_tipo_movel") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movel" ADD CONSTRAINT "movel_id_composicao_fkey" FOREIGN KEY ("id_composicao") REFERENCES "composicao"("id_composicao") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movel" ADD CONSTRAINT "movel_id_marca_movel_fkey" FOREIGN KEY ("id_marca_movel") REFERENCES "marca_movel"("id_marca_movel") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insumo" ADD CONSTRAINT "insumo_id_classe_fkey" FOREIGN KEY ("id_classe") REFERENCES "classe"("id_classe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insumo" ADD CONSTRAINT "insumo_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categoria"("id_categoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insumo" ADD CONSTRAINT "insumo_id_tipo_insumo_fkey" FOREIGN KEY ("id_tipo_insumo") REFERENCES "tipo_insumo"("id_tipo_insumo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insumo" ADD CONSTRAINT "insumo_id_composicao_fkey" FOREIGN KEY ("id_composicao") REFERENCES "composicao"("id_composicao") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insumo" ADD CONSTRAINT "insumo_id_marca_insumo_fkey" FOREIGN KEY ("id_marca_insumo") REFERENCES "marca_insumo"("id_marca_insumo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "maquina" ADD CONSTRAINT "maquina_id_classe_fkey" FOREIGN KEY ("id_classe") REFERENCES "classe"("id_classe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "maquina" ADD CONSTRAINT "maquina_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categoria"("id_categoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "maquina" ADD CONSTRAINT "maquina_id_tipo_maquina_fkey" FOREIGN KEY ("id_tipo_maquina") REFERENCES "tipo_maquina"("id_tipo_maquina") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "maquina" ADD CONSTRAINT "maquina_id_marca_maquina_fkey" FOREIGN KEY ("id_marca_maquina") REFERENCES "marca_maquina"("id_marca_maquina") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pecas_prontas" ADD CONSTRAINT "pecas_prontas_id_classe_fkey" FOREIGN KEY ("id_classe") REFERENCES "classe"("id_classe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pecas_prontas" ADD CONSTRAINT "pecas_prontas_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categoria"("id_categoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pecas_prontas" ADD CONSTRAINT "pecas_prontas_id_peca_fkey" FOREIGN KEY ("id_peca") REFERENCES "peca"("id_peca") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pecas_prontas" ADD CONSTRAINT "pecas_prontas_id_tecido_fkey" FOREIGN KEY ("id_tecido") REFERENCES "tecido"("id_tecido") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pecas_prontas" ADD CONSTRAINT "pecas_prontas_id_unidade_fkey" FOREIGN KEY ("id_unidade") REFERENCES "unidade"("id_unidade") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "corte" ADD CONSTRAINT "corte_id_classe_fkey" FOREIGN KEY ("id_classe") REFERENCES "classe"("id_classe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "corte" ADD CONSTRAINT "corte_id_peca_fkey" FOREIGN KEY ("id_peca") REFERENCES "peca"("id_peca") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "corte" ADD CONSTRAINT "corte_id_tecido_fkey" FOREIGN KEY ("id_tecido") REFERENCES "tecido"("id_tecido") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "costura" ADD CONSTRAINT "costura_id_classe_fkey" FOREIGN KEY ("id_classe") REFERENCES "classe"("id_classe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "costura" ADD CONSTRAINT "costura_id_tecido_fkey" FOREIGN KEY ("id_tecido") REFERENCES "tecido"("id_tecido") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "costura" ADD CONSTRAINT "costura_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categoria"("id_categoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "costura" ADD CONSTRAINT "costura_id_peca_fkey" FOREIGN KEY ("id_peca") REFERENCES "peca"("id_peca") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "costura" ADD CONSTRAINT "costura_id_unidade_fkey" FOREIGN KEY ("id_unidade") REFERENCES "unidade"("id_unidade") ON DELETE RESTRICT ON UPDATE CASCADE;
