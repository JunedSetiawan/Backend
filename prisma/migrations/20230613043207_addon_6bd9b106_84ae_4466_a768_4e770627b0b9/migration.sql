-- CreateTable
CREATE TABLE `siswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `kelas` ENUM('X', 'XI', 'XII') NOT NULL,
    `tanggal_lahir` DATE NOT NULL,
    `jurusan` ENUM('RPL', 'OI', 'EI', 'TPM', 'DPIB', 'TBSM') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
