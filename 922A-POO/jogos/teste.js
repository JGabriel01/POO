const { Jogo } = require('./jogo/jogos.js')
const { JogoDAO } = require('./persistencia/jogoDAO.js')

let dao = new JogoDAO()

/*dao.initializeDatabase()
dao.criarTabela()*/


/*let d1 = new Jogo("Fallout 4", "RPG", 1)
let d2 = new Jogo("The Witcher 3", "RPG", 1);
let d3 = new Jogo("Elden Ring", "Souls-like", 0);
let d4 = new Jogo("God of War Ragnarok", "Ação", 1);
let d5 = new Jogo("Cyberpunk 2077", "RPG", 1);
let d6 = new Jogo("Red Dead Redemption 2", "Aventura", 1);
let d7 = new Jogo("Hollow Knight", "Metroidvania", 0);
let d8 = new Jogo("The Last of Us Part II", "Sobrevivência", 1);
let d9 = new Jogo("Baldur's Gate 3", "RPG", 0);
let d10 = new Jogo("Stardew Valley", "Simulação", 0);


const novosJogos = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10]
novosJogos.forEach(jogo => dao.criar(jogo))*/

/*let d6 = new Jogo("Red Dead Redemption 1", "Aventura", 1, 2)
dao.atualizar(d6)*/

/*dao.deletar(10)*/

/*dao.buscarPorId(9)*/

/*dao.buscarPorTitulo("God of War Ragnarok")*/

dao.listarPendentes()