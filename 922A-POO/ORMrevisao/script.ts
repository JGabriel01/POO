// script.ts - Exemplo CRUD com Services

import { TurmaService } from './negocio/turmaService.js';
import { EstudanteService } from './negocio/estudanteService.js';

const turmaService = new TurmaService();
const estudanteService = new EstudanteService();

// ============ CRUD TURMA ============

// CREATE - Criar nova turma
const novaTurma = await turmaService.criar({
  nome: 'Turma A',
  horário: '14:00',
  Idioma: 'Português',
});
console.log('✓ Turma criada:', novaTurma);

// READ - Buscar todas as turmas
const todasTurmas = await turmaService.listarTodos();
console.log('✓ Todas as turmas:', todasTurmas);

// READ - Buscar por código
const turmaPorCodigo = await turmaService.buscarPorCodigo(novaTurma.código);
console.log('✓ Turma por código:', turmaPorCodigo);

// READ - Buscar por nome
const turmaPorNome = await turmaService.buscarPorNome('Turma A');
console.log('✓ Turma por nome:', turmaPorNome);

// UPDATE - Atualizar turma
const turmaAtualizada = await turmaService.atualizar(novaTurma.código, {
  nome: 'Turma A Atualizada',
});
console.log('✓ Turma atualizada:', turmaAtualizada);

// DELETE - Remover turma
const removido = await turmaService.remover(novaTurma.código);
console.log('✓ Turma removida:', removido);

// ============ CRUD ESTUDANTE ============

// CREATE - Criar novo estudante
const novoEstudante = await estudanteService.criar({
  nome: 'Maria Oliveira',
  turma: { connect: { código: 1 } }, // Conectar com turma existente
});
console.log('✓ Estudante criado:', novoEstudante);

// READ - Listar todos os estudantes
const todosEstudantes = await estudanteService.listarTodos();
console.log('✓ Todos os estudantes:', todosEstudantes);

// READ - Buscar por código
const estudantePorCodigo = await estudanteService.buscarPorCodigo(novoEstudante.código);
console.log('✓ Estudante por código:', estudantePorCodigo);

// READ - Buscar por nome
const estudantePorNome = await estudanteService.buscarPorNome('Maria Oliveira');
console.log('✓ Estudante por nome:', estudantePorNome);

// UPDATE - Atualizar estudante
const estudanteAtualizado = await estudanteService.atualizar(novoEstudante.código, {
  nome: 'Maria Oliveira Atualizada',
});
console.log('✓ Estudante atualizado:', estudanteAtualizado);

// DELETE - Remover estudante
const removidoEstudante = await estudanteService.remover(novoEstudante.código);
console.log('✓ Estudante removido:', removidoEstudante);