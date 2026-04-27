// script.ts

import { prisma } from './config/database.js';

try {
  // ── CREATE / UPSERT ──────────────────────────────────────
  // Usa upsert para criar o usuário apenas se o email não existir
  const novoUsuario = await prisma.usuario.upsert({
    where: { email: 'ana@exemplo.com' },
    create: {
      nome:  'Ana Silva',
      email: 'ana@exemplo.com',
      senha: '123mudarpelamordedeus',
    },
    update: {},
  });
  console.log('Usuário criado (com ID retornado pelo banco):', novoUsuario);

  // ── READ ────────────────────────────────────────────────
  // Buscar todos
  const usuarios = await prisma.usuario.findMany();
  console.log('Todos os usuários:', usuarios);

  // Buscar com ordenação
  const usuariosOrdenados = await prisma.usuario.findMany({
    orderBy: { criadoEm: 'desc' }
  });
  console.log('Usuários em ordem decrescente de criação:', usuariosOrdenados);

  // Buscar um único registro pelo id retornado na criação
  const usuarioPorId = await prisma.usuario.findUnique({
    where: { id: novoUsuario.id },
  });
  console.log(`Usuário com ID ${novoUsuario.id}:`, usuarioPorId);

  // Buscar por campo único (e-mail, slug, etc.)
  const porEmail = await prisma.usuario.findUnique({
    where: { email: 'ana@exemplo.com' },
  });
  console.log('Usuário com e-mail ana@exemplo.com:', porEmail);

  // ── UPDATE ──────────────────────────────────────────────
  let atualizado = null;
  if (usuarioPorId) {
    atualizado = await prisma.usuario.update({
      where: { id: usuarioPorId.id },
      data:  { nome: 'Ana Lima' },
    });
    console.log('Usuário atualizado:', atualizado);
  } else {
    console.log('Usuário para update não encontrado, pulando update.');
  }

  // ── DELETE ──────────────────────────────────────────────
  if (usuarioPorId) {
    await prisma.usuario.delete({
      where: { id: usuarioPorId.id },
    });
    console.log(`Usuário com ID ${usuarioPorId.id} deletado.`);
  } else {
    console.log('Usuário para delete não encontrado, pulando delete.');
  }

  // ── COUNT ───────────────────────────────────────────────
  // O modelo Usuario não possui o campo `ativo` no schema; contar todos os registros
  const total = await prisma.usuario.count();
  console.log('Total de usuários:', total);
} finally {
  await prisma.$disconnect();
}