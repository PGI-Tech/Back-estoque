/*
  Warnings:

  - The `estoque` column on the `pecas_prontas` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "pecas_prontas" DROP COLUMN "estoque",
ADD COLUMN     "estoque" INTEGER;
