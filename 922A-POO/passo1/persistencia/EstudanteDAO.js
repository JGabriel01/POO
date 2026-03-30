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

   buscar(cod) {
       let sql = `select * from estudante where cod = ?`
       const db = this.initializeDatabase();
       db.each(sql, [cod], (err, row) => {
           if (err) {
               console.error('Deu ruim buscando estudante:', err.message);
           } else {
               console.log(`Estudante encontrado:  código - ${row.cod}, nome - ${row.nome}, fone - ${row.fone}`);
           }
       });
       db.close();
   }

   listarTodos() {
       let sql = `select * from estudante`
       const db = this.initializeDatabase();
       db.each(sql, [], (err, row) => {
           if (err) {
               console.error('Deu ruim listando estudantes:', err.message);
           } else {
               console.log('Estudantes encontrados:', row);
           }
       });
       db.close();
   }

   buscarNome(nome) {
       let sql = `select * from estudante where nome like ?`
       const db = this.initializeDatabase();
       db.each(sql, [`%${nome}%`], (err, row) => {
           if (err) {
               console.error('Deu ruim buscando estudante por nome:', err.message);
           } else {
               console.log('Estudante encontrado:', row);
           }
       });
       db.close();
   }
}
module.exports = {EstudanteDAO}