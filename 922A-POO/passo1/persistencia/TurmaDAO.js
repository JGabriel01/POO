const sqlite3 = require('sqlite3').verbose();


class TurmaDAO{
   initializeDatabase() {
       let db
       try {
           db = new sqlite3.Database('./meuBanco.db')
       }catch (err) {
           console.error('Deu ruim inicializando o BD:', err.message);
       }
       return db;
   }


   inserir(turma){
       const db = this.initializeDatabase();
       try{
           db.run(`insert into turma(cod, idioma, horario) values(?, ?, ?)`,
               [turma.cod, turma.idioma, turma.horario]);
           console.log('Turma', turma.idioma, 'inserido com sucesso!');
       }catch (err) {
           console.error('Deu ruim inserindo turma:', err.message);
       }finally {
           db.close();
       }
   }


   atualizar(turma){
       const db = this.initializeDatabase();
       try{
           db.run(`update turma set horario = ?, idioma = ? where cod = ?`,
               [turma.horario, turma.idioma, turma.cod]);
           console.log('Turma', turma.cod, 'atualizada com sucesso!');
       }catch (err) {
           console.error('Deu ruim atualizando Turma:', err.message);
       }finally {
           db.close();
       }
   }


   apagar(cod){
       const db = this.initializeDatabase();
       try{
           db.run(`delete from turma where cod = ?`, [cod]);
           console.log('Turma com código', cod, 'apagada com sucesso!');
       }catch (err) {
           console.error('Deu ruim apagando Turma:', err.message);
       }finally {
           db.close();
       }
   }

   buscar(cod) {
       let sql = `select * from turma where cod = ?`
       const db = this.initializeDatabase();
       db.each(sql, [cod], (err, row) => {
           if (err) {
               console.error('Deu ruim buscando turma:', err.message);
           } else {
               console.log('Turma encontrada:', row);
           }
       });
       db.close();
   }

   listarTodos() {
       let sql = `select * from turma`
       const db = this.initializeDatabase();
       db.each(sql, [], (err, rows) => {
           if (err) {
               console.error('Deu ruim listando turmas:', err.message);
           } else {
               console.log('Turmas encontradas:', rows);
           }
       });
       db.close();
   }

   buscarIdioma(idioma) {
       let sql = `select * from turma where idioma like ?`
       const db = this.initializeDatabase();
       db.each(sql, [`%${idioma}%`], (err, row) => {
           if (err) {
               console.error('Deu ruim buscando turma por idioma:', err.message);
           } else {
               console.log('Turma encontrada:', row);
           }
       });
       db.close();
   }
}

module.exports = {TurmaDAO}