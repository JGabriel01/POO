import { TurmaDAO } from '../persistencia/turmaDAO.js';
import { Prisma } from '../generated/prisma/client';

const turmaDAO = new TurmaDAO();

export class TurmaService {
  
  // Validar horário em formato HH:MM
  private validarHorario(horario: string): boolean {
    const regex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
    return regex.test(horario);
  }

  // Validar idiomas permitidos
  private idiomas_permitidos = ['Português', 'Inglês', 'Espanhol', 'Francês'];
  
  private validarIdioma(idioma: string): boolean {
    return this.idiomas_permitidos.includes(idioma);
  }

  async criar(dados: Prisma.TurmaCreateInput) {
    // Validar nome
    if (!dados.nome || dados.nome.trim() === '') {
      throw new Error('Nome da turma não pode estar vazio');
    }

    // Validar horário
    if (!dados.horário || !this.validarHorario(dados.horário)) {
      throw new Error('Horário deve estar no formato HH:MM (ex: 14:30)');
    }

    // Validar idioma
    if (!dados.Idioma || !this.validarIdioma(dados.Idioma)) {
      throw new Error(`Idioma deve ser um dos: ${this.idiomas_permitidos.join(', ')}`);
    }

    return turmaDAO.criar(dados);
  }

  async listarTodos() {
    return turmaDAO.listarTodos();
  }

  async buscarPorCodigo(código: number) {
    if (!código || código <= 0) {
      throw new Error('Código deve ser um número positivo');
    }
    return turmaDAO.buscarPorCodigo(código);
  }

  async buscarPorNome(nome: string) {
    if (!nome || nome.trim() === '') {
      throw new Error('Nome não pode estar vazio');
    }
    return turmaDAO.buscarPorNome(nome);
  }

  async atualizar(código: number, dados: Prisma.TurmaUpdateInput) {
    // Validar código
    if (!código || código <= 0) {
      throw new Error('Código deve ser um número positivo');
    }

    // Validar se turma existe
    const turmaExistente = await turmaDAO.buscarPorCodigo(código);
    if (!turmaExistente) {
      throw new Error(`Turma com código ${código} não encontrada`);
    }

    // Validar campos se forem atualizados
    if (dados.nome && dados.nome.toString().trim() === '') {
      throw new Error('Nome da turma não pode estar vazio');
    }

    if (dados.horário && !this.validarHorario(dados.horário.toString())) {
      throw new Error('Horário deve estar no formato HH:MM');
    }

    if (dados.Idioma && !this.validarIdioma(dados.Idioma.toString())) {
      throw new Error(`Idioma deve ser um dos: ${this.idiomas_permitidos.join(', ')}`);
    }

    return turmaDAO.atualizar(código, dados);
  }

  async remover(código: number) {
    if (!código || código <= 0) {
      throw new Error('Código deve ser um número positivo');
    }

    return turmaDAO.remover(código);
  }
}
