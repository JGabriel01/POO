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
                id INT AUTO_INCREMENT,
                titulo VARCHAR,
                genero VARCHAR,
                finalizado INTEGER CHECK (finalizado IN (0,1))
            );`)
        })
    }


    criar(Jogo) {
        const db = this.initializeDatabase();
        try {
            db.run(`insert into jogo(titulo, genero, finalizado) values(?, ?, ?)`,
                [Jogo.titulo, Jogo.genero, Jogo.finalizado]);
            console.log('Jogo', Jogo.titulo, 'inserido com sucesso!');
        } catch (err) {
            console.error('Deu ruim inserindo Jogo:', err.message);
        } finally {
            db.close();
        }
    }

    buscarPorId() {
        
    }


}

module.exports = { JogoDAO }