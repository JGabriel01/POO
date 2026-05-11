/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Usuario";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Turma" (
    "código" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "horário" TEXT NOT NULL,
    "Idioma" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Estudante" (
    "código" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "códigoTrm" INTEGER NOT NULL,
    CONSTRAINT "Estudante_códigoTrm_fkey" FOREIGN KEY ("códigoTrm") REFERENCES "Turma" ("código") ON DELETE RESTRICT ON UPDATE CASCADE
);
