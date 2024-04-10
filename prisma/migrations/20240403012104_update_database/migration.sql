-- DropForeignKey
ALTER TABLE "corte" DROP CONSTRAINT "corte_id_classe_fkey";

-- DropForeignKey
ALTER TABLE "corte" DROP CONSTRAINT "corte_id_peca_fkey";

-- DropForeignKey
ALTER TABLE "corte" DROP CONSTRAINT "corte_id_tecido_fkey";

-- DropForeignKey
ALTER TABLE "costura" DROP CONSTRAINT "costura_id_categoria_fkey";

-- DropForeignKey
ALTER TABLE "costura" DROP CONSTRAINT "costura_id_classe_fkey";

-- DropForeignKey
ALTER TABLE "costura" DROP CONSTRAINT "costura_id_peca_fkey";

-- DropForeignKey
ALTER TABLE "costura" DROP CONSTRAINT "costura_id_tecido_fkey";

-- DropForeignKey
ALTER TABLE "costura" DROP CONSTRAINT "costura_id_unidade_fkey";

-- DropForeignKey
ALTER TABLE "insumo" DROP CONSTRAINT "insumo_id_categoria_fkey";

-- DropForeignKey
ALTER TABLE "insumo" DROP CONSTRAINT "insumo_id_classe_fkey";

-- DropForeignKey
ALTER TABLE "insumo" DROP CONSTRAINT "insumo_id_composicao_fkey";

-- DropForeignKey
ALTER TABLE "insumo" DROP CONSTRAINT "insumo_id_marca_insumo_fkey";

-- DropForeignKey
ALTER TABLE "insumo" DROP CONSTRAINT "insumo_id_tipo_insumo_fkey";

-- DropForeignKey
ALTER TABLE "maquina" DROP CONSTRAINT "maquina_id_categoria_fkey";

-- DropForeignKey
ALTER TABLE "maquina" DROP CONSTRAINT "maquina_id_classe_fkey";

-- DropForeignKey
ALTER TABLE "maquina" DROP CONSTRAINT "maquina_id_marca_maquina_fkey";

-- DropForeignKey
ALTER TABLE "maquina" DROP CONSTRAINT "maquina_id_tipo_maquina_fkey";

-- DropForeignKey
ALTER TABLE "movel" DROP CONSTRAINT "movel_id_categoria_fkey";

-- DropForeignKey
ALTER TABLE "movel" DROP CONSTRAINT "movel_id_classe_fkey";

-- DropForeignKey
ALTER TABLE "movel" DROP CONSTRAINT "movel_id_composicao_fkey";

-- DropForeignKey
ALTER TABLE "movel" DROP CONSTRAINT "movel_id_marca_movel_fkey";

-- DropForeignKey
ALTER TABLE "movel" DROP CONSTRAINT "movel_id_tipo_movel_fkey";

-- DropForeignKey
ALTER TABLE "pecas_prontas" DROP CONSTRAINT "pecas_prontas_id_categoria_fkey";

-- DropForeignKey
ALTER TABLE "pecas_prontas" DROP CONSTRAINT "pecas_prontas_id_classe_fkey";

-- DropForeignKey
ALTER TABLE "pecas_prontas" DROP CONSTRAINT "pecas_prontas_id_peca_fkey";

-- DropForeignKey
ALTER TABLE "pecas_prontas" DROP CONSTRAINT "pecas_prontas_id_tecido_fkey";

-- DropForeignKey
ALTER TABLE "pecas_prontas" DROP CONSTRAINT "pecas_prontas_id_unidade_fkey";

-- DropForeignKey
ALTER TABLE "usuario" DROP CONSTRAINT "usuario_id_permissao_fkey";

-- AlterTable
ALTER TABLE "categoria" ALTER COLUMN "categoria" DROP NOT NULL;

-- AlterTable
ALTER TABLE "classe" ALTER COLUMN "classe" DROP NOT NULL;

-- AlterTable
ALTER TABLE "composicao" ALTER COLUMN "composicao" DROP NOT NULL;

-- AlterTable
ALTER TABLE "corte" ALTER COLUMN "id_classe" DROP NOT NULL,
ALTER COLUMN "data" DROP NOT NULL,
ALTER COLUMN "ref" DROP NOT NULL,
ALTER COLUMN "id_peca" DROP NOT NULL,
ALTER COLUMN "id_tecido" DROP NOT NULL,
ALTER COLUMN "modelo" DROP NOT NULL,
ALTER COLUMN "pedido" DROP NOT NULL,
ALTER COLUMN "risco" DROP NOT NULL,
ALTER COLUMN "peso" DROP NOT NULL,
ALTER COLUMN "rendimento" DROP NOT NULL,
ALTER COLUMN "pecas" DROP NOT NULL,
ALTER COLUMN "aproveitamento" DROP NOT NULL,
ALTER COLUMN "rolos" DROP NOT NULL,
ALTER COLUMN "camadas" DROP NOT NULL,
ALTER COLUMN "total_pecas" DROP NOT NULL,
ALTER COLUMN "infantil" DROP NOT NULL,
ALTER COLUMN "adulto" DROP NOT NULL,
ALTER COLUMN "extra" DROP NOT NULL,
ALTER COLUMN "marca" DROP NOT NULL,
ALTER COLUMN "vrl_custo" DROP NOT NULL,
ALTER COLUMN "vlr_venda" DROP NOT NULL,
ALTER COLUMN "lucro" DROP NOT NULL;

-- AlterTable
ALTER TABLE "costura" ALTER COLUMN "id_classe" DROP NOT NULL,
ALTER COLUMN "id_categoria" DROP NOT NULL,
ALTER COLUMN "id_peca" DROP NOT NULL,
ALTER COLUMN "id_tecido" DROP NOT NULL,
ALTER COLUMN "fornecedor" DROP NOT NULL,
ALTER COLUMN "cor" DROP NOT NULL,
ALTER COLUMN "estampa" DROP NOT NULL,
ALTER COLUMN "modelo" DROP NOT NULL,
ALTER COLUMN "ref" DROP NOT NULL,
ALTER COLUMN "detalhe" DROP NOT NULL,
ALTER COLUMN "cor_detalhe" DROP NOT NULL,
ALTER COLUMN "tamanho" DROP NOT NULL,
ALTER COLUMN "id_unidade" DROP NOT NULL,
ALTER COLUMN "marca" DROP NOT NULL,
ALTER COLUMN "data_corte" DROP NOT NULL,
ALTER COLUMN "total" DROP NOT NULL,
ALTER COLUMN "data_entrada" DROP NOT NULL,
ALTER COLUMN "costura" DROP NOT NULL,
ALTER COLUMN "data_saida" DROP NOT NULL,
ALTER COLUMN "falta" DROP NOT NULL,
ALTER COLUMN "obs" DROP NOT NULL;

-- AlterTable
ALTER TABLE "embalagem" ALTER COLUMN "embalagem" DROP NOT NULL;

-- AlterTable
ALTER TABLE "especie_agulha" ALTER COLUMN "especie" DROP NOT NULL;

-- AlterTable
ALTER TABLE "insumo" ALTER COLUMN "id_classe" DROP NOT NULL,
ALTER COLUMN "id_categoria" DROP NOT NULL,
ALTER COLUMN "id_tipo_insumo" DROP NOT NULL,
ALTER COLUMN "id_composicao" DROP NOT NULL,
ALTER COLUMN "fornecedor" DROP NOT NULL,
ALTER COLUMN "id_marca_insumo" DROP NOT NULL,
ALTER COLUMN "cor" DROP NOT NULL,
ALTER COLUMN "ref" DROP NOT NULL,
ALTER COLUMN "ref_inter" DROP NOT NULL,
ALTER COLUMN "qr_code" DROP NOT NULL,
ALTER COLUMN "tamanho" DROP NOT NULL,
ALTER COLUMN "quantidade" DROP NOT NULL,
ALTER COLUMN "embalagem" DROP NOT NULL,
ALTER COLUMN "estoque" DROP NOT NULL,
ALTER COLUMN "valor" DROP NOT NULL,
ALTER COLUMN "imposto" DROP NOT NULL,
ALTER COLUMN "preco_final" DROP NOT NULL,
ALTER COLUMN "valor_estoque_total" DROP NOT NULL,
ALTER COLUMN "aplicacao" DROP NOT NULL,
ALTER COLUMN "obs" DROP NOT NULL,
ALTER COLUMN "estoque_minimo" DROP NOT NULL,
ALTER COLUMN "em_falta" DROP NOT NULL,
ALTER COLUMN "data_compra" DROP NOT NULL;

-- AlterTable
ALTER TABLE "maquina" ALTER COLUMN "id_classe" DROP NOT NULL,
ALTER COLUMN "id_categoria" DROP NOT NULL,
ALTER COLUMN "id_tipo_maquina" DROP NOT NULL,
ALTER COLUMN "fornecedor" DROP NOT NULL,
ALTER COLUMN "id_marca_maquina" DROP NOT NULL,
ALTER COLUMN "cor" DROP NOT NULL,
ALTER COLUMN "ref" DROP NOT NULL,
ALTER COLUMN "ref_inter" DROP NOT NULL,
ALTER COLUMN "qr_code" DROP NOT NULL,
ALTER COLUMN "estoque" DROP NOT NULL,
ALTER COLUMN "valor" DROP NOT NULL,
ALTER COLUMN "imposto" DROP NOT NULL,
ALTER COLUMN "preco_final" DROP NOT NULL,
ALTER COLUMN "valor_estoque_total" DROP NOT NULL,
ALTER COLUMN "aplicacao" DROP NOT NULL,
ALTER COLUMN "obs" DROP NOT NULL,
ALTER COLUMN "estoque_minimo" DROP NOT NULL,
ALTER COLUMN "em_falta" DROP NOT NULL,
ALTER COLUMN "data_compra" DROP NOT NULL;

-- AlterTable
ALTER TABLE "maquina_agulha" ALTER COLUMN "maquina" DROP NOT NULL;

-- AlterTable
ALTER TABLE "marca_agulha" ALTER COLUMN "marca" DROP NOT NULL;

-- AlterTable
ALTER TABLE "marca_elastico" ALTER COLUMN "marca" DROP NOT NULL;

-- AlterTable
ALTER TABLE "marca_insumo" ALTER COLUMN "insumo" DROP NOT NULL;

-- AlterTable
ALTER TABLE "marca_maquina" ALTER COLUMN "maquina" DROP NOT NULL;

-- AlterTable
ALTER TABLE "marca_movel" ALTER COLUMN "marca" DROP NOT NULL;

-- AlterTable
ALTER TABLE "movel" ALTER COLUMN "id_classe" DROP NOT NULL,
ALTER COLUMN "id_categoria" DROP NOT NULL,
ALTER COLUMN "id_tipo_movel" DROP NOT NULL,
ALTER COLUMN "id_composicao" DROP NOT NULL,
ALTER COLUMN "fornecedor" DROP NOT NULL,
ALTER COLUMN "id_marca_movel" DROP NOT NULL,
ALTER COLUMN "cor" DROP NOT NULL,
ALTER COLUMN "estoque" DROP NOT NULL,
ALTER COLUMN "valor" DROP NOT NULL,
ALTER COLUMN "imposto" DROP NOT NULL,
ALTER COLUMN "preco_final" DROP NOT NULL,
ALTER COLUMN "valor_estoque_total" DROP NOT NULL,
ALTER COLUMN "aplicacao" DROP NOT NULL,
ALTER COLUMN "obs" DROP NOT NULL,
ALTER COLUMN "estoque_minimo" DROP NOT NULL,
ALTER COLUMN "em_falta" DROP NOT NULL,
ALTER COLUMN "data_compra" DROP NOT NULL;

-- AlterTable
ALTER TABLE "peca" ALTER COLUMN "peca" DROP NOT NULL;

-- AlterTable
ALTER TABLE "pecas_prontas" ALTER COLUMN "id_classe" DROP NOT NULL,
ALTER COLUMN "id_categoria" DROP NOT NULL,
ALTER COLUMN "id_peca" DROP NOT NULL,
ALTER COLUMN "id_tecido" DROP NOT NULL,
ALTER COLUMN "fornecedor" DROP NOT NULL,
ALTER COLUMN "cor" DROP NOT NULL,
ALTER COLUMN "estampa" DROP NOT NULL,
ALTER COLUMN "modelo" DROP NOT NULL,
ALTER COLUMN "ref" DROP NOT NULL,
ALTER COLUMN "detalhe" DROP NOT NULL,
ALTER COLUMN "cor_detalhe" DROP NOT NULL,
ALTER COLUMN "tamanho" DROP NOT NULL,
ALTER COLUMN "id_unidade" DROP NOT NULL,
ALTER COLUMN "marca" DROP NOT NULL,
ALTER COLUMN "estoque" DROP NOT NULL,
ALTER COLUMN "valor" DROP NOT NULL,
ALTER COLUMN "valor_estoque_total" DROP NOT NULL,
ALTER COLUMN "obs" DROP NOT NULL,
ALTER COLUMN "estoque_minimo" DROP NOT NULL,
ALTER COLUMN "em_falta" DROP NOT NULL,
ALTER COLUMN "data_compra" DROP NOT NULL;

-- AlterTable
ALTER TABLE "permissao" ALTER COLUMN "descricao" DROP NOT NULL;

-- AlterTable
ALTER TABLE "tipo_elastico" ALTER COLUMN "tipo" DROP NOT NULL;

-- AlterTable
ALTER TABLE "tipo_linha" ALTER COLUMN "tipo" DROP NOT NULL;

-- AlterTable
ALTER TABLE "unidade" ALTER COLUMN "unidade" DROP NOT NULL,
ALTER COLUMN "sigla" DROP NOT NULL;

-- AlterTable
ALTER TABLE "usuario" ALTER COLUMN "username" DROP NOT NULL,
ALTER COLUMN "senha" DROP NOT NULL,
ALTER COLUMN "id_permissao" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_id_permissao_fkey" FOREIGN KEY ("id_permissao") REFERENCES "permissao"("id_permissao") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movel" ADD CONSTRAINT "movel_id_classe_fkey" FOREIGN KEY ("id_classe") REFERENCES "classe"("id_classe") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movel" ADD CONSTRAINT "movel_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categoria"("id_categoria") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movel" ADD CONSTRAINT "movel_id_tipo_movel_fkey" FOREIGN KEY ("id_tipo_movel") REFERENCES "tipo_movel"("id_tipo_movel") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movel" ADD CONSTRAINT "movel_id_composicao_fkey" FOREIGN KEY ("id_composicao") REFERENCES "composicao"("id_composicao") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movel" ADD CONSTRAINT "movel_id_marca_movel_fkey" FOREIGN KEY ("id_marca_movel") REFERENCES "marca_movel"("id_marca_movel") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insumo" ADD CONSTRAINT "insumo_id_classe_fkey" FOREIGN KEY ("id_classe") REFERENCES "classe"("id_classe") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insumo" ADD CONSTRAINT "insumo_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categoria"("id_categoria") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insumo" ADD CONSTRAINT "insumo_id_tipo_insumo_fkey" FOREIGN KEY ("id_tipo_insumo") REFERENCES "tipo_insumo"("id_tipo_insumo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insumo" ADD CONSTRAINT "insumo_id_composicao_fkey" FOREIGN KEY ("id_composicao") REFERENCES "composicao"("id_composicao") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insumo" ADD CONSTRAINT "insumo_id_marca_insumo_fkey" FOREIGN KEY ("id_marca_insumo") REFERENCES "marca_insumo"("id_marca_insumo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "maquina" ADD CONSTRAINT "maquina_id_classe_fkey" FOREIGN KEY ("id_classe") REFERENCES "classe"("id_classe") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "maquina" ADD CONSTRAINT "maquina_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categoria"("id_categoria") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "maquina" ADD CONSTRAINT "maquina_id_tipo_maquina_fkey" FOREIGN KEY ("id_tipo_maquina") REFERENCES "tipo_maquina"("id_tipo_maquina") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "maquina" ADD CONSTRAINT "maquina_id_marca_maquina_fkey" FOREIGN KEY ("id_marca_maquina") REFERENCES "marca_maquina"("id_marca_maquina") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pecas_prontas" ADD CONSTRAINT "pecas_prontas_id_classe_fkey" FOREIGN KEY ("id_classe") REFERENCES "classe"("id_classe") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pecas_prontas" ADD CONSTRAINT "pecas_prontas_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categoria"("id_categoria") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pecas_prontas" ADD CONSTRAINT "pecas_prontas_id_peca_fkey" FOREIGN KEY ("id_peca") REFERENCES "peca"("id_peca") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pecas_prontas" ADD CONSTRAINT "pecas_prontas_id_tecido_fkey" FOREIGN KEY ("id_tecido") REFERENCES "tecido"("id_tecido") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pecas_prontas" ADD CONSTRAINT "pecas_prontas_id_unidade_fkey" FOREIGN KEY ("id_unidade") REFERENCES "unidade"("id_unidade") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "corte" ADD CONSTRAINT "corte_id_classe_fkey" FOREIGN KEY ("id_classe") REFERENCES "classe"("id_classe") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "corte" ADD CONSTRAINT "corte_id_peca_fkey" FOREIGN KEY ("id_peca") REFERENCES "peca"("id_peca") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "corte" ADD CONSTRAINT "corte_id_tecido_fkey" FOREIGN KEY ("id_tecido") REFERENCES "tecido"("id_tecido") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "costura" ADD CONSTRAINT "costura_id_classe_fkey" FOREIGN KEY ("id_classe") REFERENCES "classe"("id_classe") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "costura" ADD CONSTRAINT "costura_id_tecido_fkey" FOREIGN KEY ("id_tecido") REFERENCES "tecido"("id_tecido") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "costura" ADD CONSTRAINT "costura_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categoria"("id_categoria") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "costura" ADD CONSTRAINT "costura_id_peca_fkey" FOREIGN KEY ("id_peca") REFERENCES "peca"("id_peca") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "costura" ADD CONSTRAINT "costura_id_unidade_fkey" FOREIGN KEY ("id_unidade") REFERENCES "unidade"("id_unidade") ON DELETE SET NULL ON UPDATE CASCADE;
