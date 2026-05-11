import { prisma } from '../config/database.js';
import { Prisma } from '../generated/prisma/client';

export class TurmaDAO {

  async listarTodos() {
    return prisma.turma.findMany();
  }

  async buscarPorCodigo(código: number) {
    return prisma.turma.findUnique({ where: { código } });
  }

  async buscarPorNome(nome: string) {
    return prisma.turma.findFirst({ where: { nome } });
  }

  async criar(dados: Prisma.TurmaCreateInput) {
    return prisma.turma.create({ data: dados });
  }

  async atualizar(código: number, dados: Prisma.TurmaUpdateInput) {
    return prisma.turma.update({ where: { código }, data: dados });
  }

  async remover(código: number) {
    await prisma.turma.delete({ where: { código } });
    return true;
  }
}