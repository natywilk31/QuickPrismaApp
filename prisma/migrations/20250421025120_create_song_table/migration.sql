/*
  Warnings:

  - Made the column `albumName` on table `Song` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Song" ALTER COLUMN "albumName" SET NOT NULL;
