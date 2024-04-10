/*
  Warnings:

  - The `tamanho` column on the `agulha` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `peso` column on the `corte` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `vrl_custo` column on the `corte` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `vlr_venda` column on the `corte` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `lucro` column on the `corte` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `tamanho` column on the `costura` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `tamanho` column on the `insumo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `estoque` column on the `insumo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `tamanho` column on the `linha` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `estoque` column on the `maquina` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `tamanho` column on the `pecas_prontas` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `qantidade` on the `tecido` table. All the data in the column will be lost.
  - The `tamanho` column on the `tecido` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "agulha" DROP COLUMN "tamanho",
ADD COLUMN     "tamanho" DOUBLE PRECISION,
ALTER COLUMN "valor" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "imposto" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "preco_final" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "valor_estoque_total" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "corte" DROP COLUMN "peso",
ADD COLUMN     "peso" DOUBLE PRECISION,
DROP COLUMN "vrl_custo",
ADD COLUMN     "vrl_custo" DOUBLE PRECISION,
DROP COLUMN "vlr_venda",
ADD COLUMN     "vlr_venda" DOUBLE PRECISION,
DROP COLUMN "lucro",
ADD COLUMN     "lucro" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "costura" DROP COLUMN "tamanho",
ADD COLUMN     "tamanho" DOUBLE PRECISION,
ALTER COLUMN "total" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "elastico" ALTER COLUMN "largura" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "valor" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "imposto" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "preco_final" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "valor_estoque_total" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "insumo" DROP COLUMN "tamanho",
ADD COLUMN     "tamanho" DOUBLE PRECISION,
DROP COLUMN "estoque",
ADD COLUMN     "estoque" INTEGER,
ALTER COLUMN "valor" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "imposto" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "preco_final" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "valor_estoque_total" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "linha" DROP COLUMN "tamanho",
ADD COLUMN     "tamanho" DOUBLE PRECISION,
ALTER COLUMN "valor" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "imposto" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "preco_final" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "valor_estoque_total" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "maquina" DROP COLUMN "estoque",
ADD COLUMN     "estoque" INTEGER,
ALTER COLUMN "valor" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "imposto" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "preco_final" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "valor_estoque_total" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "movel" ALTER COLUMN "valor" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "imposto" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "preco_final" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "valor_estoque_total" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "pecas_prontas" DROP COLUMN "tamanho",
ADD COLUMN     "tamanho" DOUBLE PRECISION,
ALTER COLUMN "valor" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "valor_estoque_total" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "tecido" DROP COLUMN "qantidade",
ADD COLUMN     "quantidade" INTEGER,
ALTER COLUMN "largura" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "gramatura" SET DATA TYPE DOUBLE PRECISION,
DROP COLUMN "tamanho",
ADD COLUMN     "tamanho" DOUBLE PRECISION,
ALTER COLUMN "valor" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "imposto" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "preco_final" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "valor_estoque_total" SET DATA TYPE DOUBLE PRECISION;
