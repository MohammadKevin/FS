/*
  Warnings:

  - You are about to drop the column `description` on the `service` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `service` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `testimonials` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `testimonials` table. All the data in the column will be lost.
  - Added the required column `descriptionPart` to the `service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partner` to the `service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptiontest` to the `testimonials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `namePeople` to the `testimonials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `service` DROP COLUMN `description`,
    DROP COLUMN `role`,
    ADD COLUMN `descriptionPart` TEXT NOT NULL,
    ADD COLUMN `partner` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `testimonials` DROP COLUMN `description`,
    DROP COLUMN `name`,
    ADD COLUMN `descriptiontest` TEXT NOT NULL,
    ADD COLUMN `namePeople` VARCHAR(191) NOT NULL;
