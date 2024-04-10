/*
  Warnings:

  - You are about to drop the column `insumo` on the `marca_insumo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "marca_insumo" DROP COLUMN "insumo",
ADD COLUMN     "marca" TEXT;
