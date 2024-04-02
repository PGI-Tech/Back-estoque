-- DropForeignKey
ALTER TABLE "linha" DROP CONSTRAINT "linha_id_categoria_fkey";

-- DropForeignKey
ALTER TABLE "linha" DROP CONSTRAINT "linha_id_classe_fkey";

-- DropForeignKey
ALTER TABLE "linha" DROP CONSTRAINT "linha_id_composicao_fkey";

-- DropForeignKey
ALTER TABLE "linha" DROP CONSTRAINT "linha_id_embalagem_fkey";

-- DropForeignKey
ALTER TABLE "linha" DROP CONSTRAINT "linha_id_tipo_linha_fkey";

-- DropForeignKey
ALTER TABLE "linha" DROP CONSTRAINT "linha_id_unidade_fkey";

-- AlterTable
ALTER TABLE "linha" ALTER COLUMN "foto" DROP NOT NULL,
ALTER COLUMN "id_categoria" DROP NOT NULL,
ALTER COLUMN "id_classe" DROP NOT NULL,
ALTER COLUMN "id_tipo_linha" DROP NOT NULL,
ALTER COLUMN "id_composicao" DROP NOT NULL,
ALTER COLUMN "fornecedor" DROP NOT NULL,
ALTER COLUMN "marca_linha" DROP NOT NULL,
ALTER COLUMN "cor" DROP NOT NULL,
ALTER COLUMN "ref" DROP NOT NULL,
ALTER COLUMN "num_pedido" DROP NOT NULL,
ALTER COLUMN "qr_code" DROP NOT NULL,
ALTER COLUMN "tamanho" DROP NOT NULL,
ALTER COLUMN "quantidade" DROP NOT NULL,
ALTER COLUMN "id_unidade" DROP NOT NULL,
ALTER COLUMN "id_embalagem" DROP NOT NULL,
ALTER COLUMN "estoque" DROP NOT NULL,
ALTER COLUMN "valor" DROP NOT NULL,
ALTER COLUMN "imposto" DROP NOT NULL,
ALTER COLUMN "preco_final" DROP NOT NULL,
ALTER COLUMN "valor_estoque_total" DROP NOT NULL,
ALTER COLUMN "obs" DROP NOT NULL,
ALTER COLUMN "estoque_minimo" DROP NOT NULL,
ALTER COLUMN "em_falta" DROP NOT NULL,
ALTER COLUMN "data_compra" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "linha" ADD CONSTRAINT "linha_id_embalagem_fkey" FOREIGN KEY ("id_embalagem") REFERENCES "embalagem"("id_embalagem") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "linha" ADD CONSTRAINT "linha_id_unidade_fkey" FOREIGN KEY ("id_unidade") REFERENCES "unidade"("id_unidade") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "linha" ADD CONSTRAINT "linha_id_composicao_fkey" FOREIGN KEY ("id_composicao") REFERENCES "composicao"("id_composicao") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "linha" ADD CONSTRAINT "linha_id_tipo_linha_fkey" FOREIGN KEY ("id_tipo_linha") REFERENCES "tipo_linha"("id_tipo_linha") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "linha" ADD CONSTRAINT "linha_id_classe_fkey" FOREIGN KEY ("id_classe") REFERENCES "classe"("id_classe") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "linha" ADD CONSTRAINT "linha_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categoria"("id_categoria") ON DELETE SET NULL ON UPDATE CASCADE;
