const sqlite3 = require('sqlite3').verbose();


class EstudanteDAO{
   initializeDatabase() {
       let db
       try {
           db = new sqlite3.Database('./meuBanco.db')
       }catch (err) {
           console.error('Deu ruim inicializando o BD:', err.message);
       }
       return db;
   }


   inserir(estudante){
       const db = this.initializeDatabase();
       try{
           db.run(`insert into estudante(cod, nome, fone) values(?, ?, ?)`,
               [estudante.cod, estudante.nome, estudante.fone]);
           console.log('Estudante', estudante.nome, 'inserido com sucesso!');
       }catch (err) {
           console.error('Deu ruim inserindo estudante:', err.message);
       }finally {
           db.close();
       }
   }


   atualizar(estudante){
       const db = this.initializeDatabase();
       try{
           db.run(`update estudante set nome = ?, fone = ? where cod = ?`,
               [estudante.nome, estudante.fone, estudante.cod]);
           console.log('Estudante', estudante.nome, 'atualizado com sucesso!');
       }catch (err) {
           console.error('Deu ruim atualizando estudante:', err.message);
       }finally {
           db.close();
       }
   }


   apagar(cod){
       const db = this.initializeDatabase();
       try{
           db.run(`delete from estudante where cod = ?`, [cod]);
           console.log('Estudante com código', cod, 'apagado com sucesso!');
       }catch (err) {
           console.error('Deu ruim apagando estudante:', err.message);
       }finally {
           db.close();
       }
   }
}

module.exports = {EstudanteDAO}