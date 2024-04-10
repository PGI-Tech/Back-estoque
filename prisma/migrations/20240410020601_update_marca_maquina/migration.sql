/*
  Warnings:

  - You are about to drop the column `maquina` on the `marca_maquina` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "marca_maquina" DROP COLUMN "maquina",
ADD COLUMN     "marca" TEXT;
