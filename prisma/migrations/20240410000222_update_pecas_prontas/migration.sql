/*
  Warnings:

  - You are about to drop the column `id_peca` on the `corte` table. All the data in the column will be lost.
  - You are about to drop the column `id_peca` on the `costura` table. All the data in the column will be lost.
  - You are about to drop the column `id_peca` on the `pecas_prontas` table. All the data in the column will be lost.
  - You are about to drop the `peca` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "corte" DROP CONSTRAINT "corte_id_peca_fkey";

-- DropForeignKey
ALTER TABLE "costura" DROP CONSTRAINT "costura_id_peca_fkey";

-- DropForeignKey
ALTER TABLE "pecas_prontas" DROP CONSTRAINT "pecas_prontas_id_peca_fkey";

-- AlterTable
ALTER TABLE "corte" DROP COLUMN "id_peca",
ADD COLUMN     "id_pecas_prontas" INTEGER;

-- AlterTable
ALTER TABLE "costura" DROP COLUMN "id_peca",
ADD COLUMN     "id_pecas_prontas" INTEGER;

-- AlterTable
ALTER TABLE "pecas_prontas" DROP COLUMN "id_peca",
ADD COLUMN     "descricao_peca" TEXT;

-- DropTable
DROP TABLE "peca";

-- AddForeignKey
ALTER TABLE "corte" ADD CONSTRAINT "corte_id_pecas_prontas_fkey" FOREIGN KEY ("id_pecas_prontas") REFERENCES "pecas_prontas"("id_pecas_prontas") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "costura" ADD CONSTRAINT "costura_id_pecas_prontas_fkey" FOREIGN KEY ("id_pecas_prontas") REFERENCES "pecas_prontas"("id_pecas_prontas") ON DELETE SET NULL ON UPDATE CASCADE;
