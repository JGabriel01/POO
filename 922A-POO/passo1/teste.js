const {Estudante} = require('./negocio/Estudante')
const {EstudanteDAO} = require('./persistencia/EstudanteDAO')
const {Turma} = require('./negocio/Turma')
const {TurmaDAO} = require('./persistencia/TurmaDAO')


/*let fulano = new Estudante(6, 'Fulano de Coisa', '11999999999')
let dao = new EstudanteDAO()
dao.inserir(fulano)*/

let t1 = new Turma(6, 'Portugues', '16hrs')
let daoT = new TurmaDAO()
daoT.inserir(t1)