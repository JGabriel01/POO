const sqlite3 = require('sqlite3').verbose()

function inicializarBanco() {
    let db 

    try {
        db = new sqlite3.Database('./meuBanco.db')
    } catch (erro) {
        console.error('Deu ruim inicializando o BD: ', erro.message)

    }

    return db
}

inicializarBanco()

function criaTabelas() {
    const db = inicializarBanco()
    db.serialize(() => {
        db.run(`create table estudante(
            cod interger,
            nome text,
            fone text,
            primary key (cod)
            )`)

    
        db.run(`create table turma (
            cod interger primary key,
            idioma text,
            horario text
            )`)

    
        db.run(`create table turma_estudante(
            cod_estudante interger,
            cod_turma interger,
            primary key (cod_estudante,cod_turma),
            foreign key (cod_estudante) references estudante(cod),
            foreign key (cod_turma) references turma(cod)
            )`)
    })
    db.close()
}

criaTabelas()