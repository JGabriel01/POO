import { prisma } from '../config/database.js';
import { Prisma } from '../generated/prisma/client';

export class EstudanteDAO {

  async listarTodos() {
    return prisma.estudante.findMany();
  }

  async buscarPorCodigo(codigo: number) {
    return prisma.estudante.findUnique({ where: { código: codigo } });
  }

  async buscarPorNome(nome: string) {
    return prisma.estudante.findFirst({ where: { nome } });
  }

  async criar(dados: Prisma.EstudanteCreateInput) {
    return prisma.estudante.create({ data: dados });
  }

  async atualizar(codigo: number, dados: Prisma.EstudanteUpdateInput) {
    return prisma.estudante.update({ where: { código: codigo }, data: dados });
  }

  async remover(codigo: number) {
    await prisma.estudante.delete({ where: { código: codigo } });
    return true;
  }
}