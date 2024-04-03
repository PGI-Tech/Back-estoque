-- DropForeignKey
ALTER TABLE "agulha" DROP CONSTRAINT "agulha_id_categoria_fkey";

-- DropForeignKey
ALTER TABLE "agulha" DROP CONSTRAINT "agulha_id_classe_fkey";

-- DropForeignKey
ALTER TABLE "agulha" DROP CONSTRAINT "agulha_id_especie_agulha_fkey";

-- DropForeignKey
ALTER TABLE "agulha" DROP CONSTRAINT "agulha_id_maquina_agulha_fkey";

-- DropForeignKey
ALTER TABLE "agulha" DROP CONSTRAINT "agulha_id_marca_agulha_fkey";

-- DropForeignKey
ALTER TABLE "agulha" DROP CONSTRAINT "agulha_id_unidade_fkey";

-- AlterTable
ALTER TABLE "agulha" ALTER COLUMN "id_classe" DROP NOT NULL,
ALTER COLUMN "foto" DROP NOT NULL,
ALTER COLUMN "id_categoria" DROP NOT NULL,
ALTER COLUMN "id_maquina_agulha" DROP NOT NULL,
ALTER COLUMN "id_especie_agulha" DROP NOT NULL,
ALTER COLUMN "fornecedor" DROP NOT NULL,
ALTER COLUMN "id_marca_agulha" DROP NOT NULL,
ALTER COLUMN "ref" DROP NOT NULL,
ALTER COLUMN "num_pedido" DROP NOT NULL,
ALTER COLUMN "qr_code" DROP NOT NULL,
ALTER COLUMN "tamanho" DROP NOT NULL,
ALTER COLUMN "estoque" DROP NOT NULL,
ALTER COLUMN "id_unidade" DROP NOT NULL,
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
ALTER TABLE "agulha" ADD CONSTRAINT "agulha_id_classe_fkey" FOREIGN KEY ("id_classe") REFERENCES "classe"("id_classe") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agulha" ADD CONSTRAINT "agulha_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categoria"("id_categoria") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agulha" ADD CONSTRAINT "agulha_id_maquina_agulha_fkey" FOREIGN KEY ("id_maquina_agulha") REFERENCES "maquina_agulha"("id_maquina_agulha") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agulha" ADD CONSTRAINT "agulha_id_especie_agulha_fkey" FOREIGN KEY ("id_especie_agulha") REFERENCES "especie_agulha"("id_especie_agulha") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agulha" ADD CONSTRAINT "agulha_id_marca_agulha_fkey" FOREIGN KEY ("id_marca_agulha") REFERENCES "marca_agulha"("id_marca_agulha") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agulha" ADD CONSTRAINT "agulha_id_unidade_fkey" FOREIGN KEY ("id_unidade") REFERENCES "unidade"("id_unidade") ON DELETE SET NULL ON UPDATE CASCADE;
