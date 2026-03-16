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
}

module.exports = {TurmaDAO}