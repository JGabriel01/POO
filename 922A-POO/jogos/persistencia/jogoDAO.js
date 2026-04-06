const sqlite3 = require('sqlite3').verbose();

class JogoDAO {
    initializeDatabase() {
        let db
        try {
            db = new sqlite3.Database('./meuBanco.db')
        } catch (err) {
            console.error('Deu ruim inicializando o BD:', err.message);
        }
        return db;
    }

    criarTabela() {
        const db = this.initializeDatabase()
        db.serialize(() => {
            db.run(`create table jogos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                titulo VARCHAR,
                genero VARCHAR,
                finalizado INTEGER CHECK (finalizado IN (0,1))
            );`)
        })
    }


    criar(Jogo) {
        const db = this.initializeDatabase();

        db.run(`insert into jogos(titulo, genero, finalizado) values(?, ?, ?)`,
            [Jogo.titulo, Jogo.genero, Jogo.finalizado],
            function (err) {
                if (err) {
                    return console.error('Deu ruim:', err.message)
                }
                console.log('Jogo', Jogo.titulo, 'inserido com sucesso!')
            })
    }

    buscarPorId(id) {
        let sql = `select * from jogos where id = ?`
        const db = this.initializeDatabase();
        db.each(sql, [id], (err, row) => {
            if (err) {
                console.error('Deu ruim buscando jogo:', err.message);
            } else {
                console.log(`Jogo encontrado:  id - ${row.id}, título - ${row.titulo}, gênero - ${row.genero}`);
            }
        });
        db.close();
    }

    buscarPorTitulo(titulo) {
        let sql = `select * from jogos where titulo = ?`
        const db = this.initializeDatabase();
        db.each(sql, [titulo], (err, row) => {
            if (err) {
                console.error('Deu ruim buscando jogo:', err.message);
            } else {
                console.log([row.id, row.titulo, row.genero, row.finalizado])
            }
        });
        db.close();
    }

    atualizar(jogo) {
        const db = this.initializeDatabase();
        db.run(`update jogos set titulo = ?, genero = ?, finalizado = ?
            where id = ?`,
            [jogo.titulo, jogo.genero, jogo.finalizado, jogo.id], function (err) {
                if (err) {
                    return console.error('Erro ao atualizar:', err.message);
                }

                if (this.changes === 0) {
                    console.log(`Atenção: Nenhum jogo encontrado com o ID ${jogo.id}`);
                } else {
                    console.log(`Jogo "${jogo.titulo}" atualizado com sucesso!`);
                }
            });
            db.close
    }

    deletar(id) {
        const db = this.initializeDatabase();
        try {
            db.run(`delete from jogos where id = ?`, [id]);
            console.log('Jogo com id', id, 'apagado com sucesso!');
        } catch (err) {
            console.error('Deu ruim apagando Jogo:', err.message);
        } finally {
            db.close();
        }
    }

    listarTodos() {
        let sql = `select * from jogos`
        const db = this.initializeDatabase();
        db.each(sql, [], (err, row) => {
            if (err) {
                console.error('Deu ruim listando os jogos:', err.message);
            } else {
                console.log('Jogos encontrados:', row);
            }
        });
        db.close();
    }


    listarPendentes() {
        let sql = `select * from jogos where finalizado = ?`
        const db = this.initializeDatabase();
        db.each(sql, [0], (err, row) => {
            if (err) {
                console.error('Deu ruim buscando jogo:', err.message);
            } else {
                console.log([row.id, row.titulo, row.genero, row.finalizado])
            }
        });
        db.close();
    }
}


module.exports = { JogoDAO }