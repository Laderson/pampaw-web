/*
  Warnings:

  - Added the required column `address` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `petGender` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PetGender" AS ENUM ('MALE', 'FEMALE');

-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "petGender" "PetGender" NOT NULL;
