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

function inserirNasTabelas() {
    const db = inicializarBanco()
    db.serialize(() => {
        db.run(`insert into estudante(cod, nome, fone) values (1, 'zé', "82998765679"),
                                                             (2, 'zézinho', "82998765679"),
                                                             (3, 'zé inho', "82998765679"),
                                                             (4, 'zézão', "82998765679"),
                                                             (5, 'zé ão', "82998765679");
                                                             `)

    
        db.run(`insert into turma(cod, idioma, horario) values (1, 'pt', '16hrs'),
                                                             (2, 'pt-br', "17hrs"),
                                                             (3, 'usa', "18hrs"),
                                                             (4, 'espanhol', "19hrs"),
                                                             (5, 'frances', "20hrs");
                                                             `)

    
        db.run(`insert into turma_estudante(cod_estudante, cod_turma) values (1,1),
                                                             (2,2),
                                                             (3,3),
                                                             (4,4),
                                                             (5,5)
                                                             `)
    })
    db.close()
}

inserirNasTabelas()