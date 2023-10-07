-- CreateTable
CREATE TABLE `Konsul` (
    `no` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phone` INTEGER NOT NULL,
    `treatmen` VARCHAR(191) NOT NULL,
    `dokter` VARCHAR(191) NOT NULL,
    `reservationdate` DATETIME(3) NOT NULL,
    `problem` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `testi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `mail` VARCHAR(191) NOT NULL,
    `testimon` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
