/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Song` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Song" DROP COLUMN "createdAt",
ALTER COLUMN "albumName" DROP NOT NULL;
