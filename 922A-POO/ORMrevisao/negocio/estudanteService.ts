import { EstudanteDAO } from '../persistencia/estudanteDAO.js';
import { TurmaDAO } from '../persistencia/turmaDAO.js';
import { Prisma } from '../generated/prisma/client';

const estudanteDAO = new EstudanteDAO();
const turmaDAO = new TurmaDAO();

export class EstudanteService {

  async criar(dados: Prisma.EstudanteCreateInput) {
    // Validar nome
    if (!dados.nome || dados.nome.trim() === '') {
      throw new Error('Nome do estudante não pode estar vazio');
    }

    // Validar se turma existe
    if (dados.turma) {
      const turmaExistente = await turmaDAO.buscarPorCodigo(
        (dados.turma as any).connect?.código
      );
      if (!turmaExistente) {
        throw new Error('Turma especificada não existe');
      }
    }

    return estudanteDAO.criar(dados);
  }

  async listarTodos() {
    return estudanteDAO.listarTodos();
  }

  async buscarPorCodigo(codigo: number) {
    if (!codigo || codigo <= 0) {
      throw new Error('Código deve ser um número positivo');
    }
    return estudanteDAO.buscarPorCodigo(codigo);
  }

  async buscarPorNome(nome: string) {
    if (!nome || nome.trim() === '') {
      throw new Error('Nome não pode estar vazio');
    }
    return estudanteDAO.buscarPorNome(nome);
  }

  async atualizar(codigo: number, dados: Prisma.EstudanteUpdateInput) {
    // Validar código
    if (!codigo || codigo <= 0) {
      throw new Error('Código deve ser um número positivo');
    }

    // Validar se estudante existe
    const estudanteExistente = await estudanteDAO.buscarPorCodigo(codigo);
    if (!estudanteExistente) {
      throw new Error(`Estudante com código ${codigo} não encontrado`);
    }

    // Validar nome se for atualizado
    if (dados.nome && dados.nome.toString().trim() === '') {
      throw new Error('Nome do estudante não pode estar vazio');
    }

    return estudanteDAO.atualizar(codigo, dados);
  }

  async remover(codigo: number) {
    if (!codigo || codigo <= 0) {
      throw new Error('Código deve ser um número positivo');
    }

    const estudanteExistente = await estudanteDAO.buscarPorCodigo(codigo);
    if (!estudanteExistente) {
      throw new Error(`Estudante com código ${codigo} não encontrado`);
    }

    return estudanteDAO.remover(codigo);
  }
}
