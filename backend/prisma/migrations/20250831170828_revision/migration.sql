/*
  Warnings:

  - You are about to drop the column `partner` on the `service` table. All the data in the column will be lost.
  - Added the required column `part` to the `service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `service` DROP COLUMN `partner`,
    ADD COLUMN `part` VARCHAR(191) NOT NULL;
