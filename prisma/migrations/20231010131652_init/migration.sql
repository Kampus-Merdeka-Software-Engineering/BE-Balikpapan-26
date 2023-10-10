/*
  Warnings:

  - The primary key for the `Konsul` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `Konsul` DROP PRIMARY KEY,
    MODIFY `no` VARCHAR(191) NOT NULL,
    MODIFY `phone` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`no`);
