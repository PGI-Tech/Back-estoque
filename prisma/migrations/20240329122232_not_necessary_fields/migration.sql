-- DropForeignKey
ALTER TABLE "elastico" DROP CONSTRAINT "elastico_id_categoria_fkey";

-- DropForeignKey
ALTER TABLE "elastico" DROP CONSTRAINT "elastico_id_composicao_fkey";

-- DropForeignKey
ALTER TABLE "elastico" DROP CONSTRAINT "elastico_id_embalagem_fkey";

-- DropForeignKey
ALTER TABLE "elastico" DROP CONSTRAINT "elastico_id_marca_elastico_fkey";

-- DropForeignKey
ALTER TABLE "elastico" DROP CONSTRAINT "elastico_id_tipo_elastico_fkey";

-- DropForeignKey
ALTER TABLE "elastico" DROP CONSTRAINT "elastico_id_unidade_fkey";

-- AlterTable
ALTER TABLE "elastico" ALTER COLUMN "foto" DROP NOT NULL,
ALTER COLUMN "id_categoria" DROP NOT NULL,
ALTER COLUMN "id_tipo_elastico" DROP NOT NULL,
ALTER COLUMN "nome" DROP NOT NULL,
ALTER COLUMN "id_composicao" DROP NOT NULL,
ALTER COLUMN "fornecedor" DROP NOT NULL,
ALTER COLUMN "id_marca_elastico" DROP NOT NULL,
ALTER COLUMN "cor" DROP NOT NULL,
ALTER COLUMN "ref" DROP NOT NULL,
ALTER COLUMN "ref_inter" DROP NOT NULL,
ALTER COLUMN "qr_code" DROP NOT NULL,
ALTER COLUMN "largura" DROP NOT NULL,
ALTER COLUMN "id_embalagem" DROP NOT NULL,
ALTER COLUMN "id_unidade" DROP NOT NULL,
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

-- AddForeignKey
ALTER TABLE "elastico" ADD CONSTRAINT "elastico_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categoria"("id_categoria") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "elastico" ADD CONSTRAINT "elastico_id_unidade_fkey" FOREIGN KEY ("id_unidade") REFERENCES "unidade"("id_unidade") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "elastico" ADD CONSTRAINT "elastico_id_embalagem_fkey" FOREIGN KEY ("id_embalagem") REFERENCES "embalagem"("id_embalagem") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "elastico" ADD CONSTRAINT "elastico_id_marca_elastico_fkey" FOREIGN KEY ("id_marca_elastico") REFERENCES "marca_elastico"("id_marca_elastico") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "elastico" ADD CONSTRAINT "elastico_id_composicao_fkey" FOREIGN KEY ("id_composicao") REFERENCES "composicao"("id_composicao") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "elastico" ADD CONSTRAINT "elastico_id_tipo_elastico_fkey" FOREIGN KEY ("id_tipo_elastico") REFERENCES "tipo_elastico"("id_tipo_elastico") ON DELETE SET NULL ON UPDATE CASCADE;
