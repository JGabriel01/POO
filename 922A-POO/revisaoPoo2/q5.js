class Livro {
    constructor(titulo, autor, isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn; // ISBN: chave única
        this.disponivel = true; 
    }

    toString() {
        const status = this.disponivel ? 'Disponível' : 'Emprestado';
        return `"${this.titulo}" por ${this.autor} (ISBN: ${this.isbn}) - Status: ${status}`;
    }
}

class Usuario {
    constructor(nome, id) {
        this.nome = nome;
        this.id = id;
    }
}

class Biblioteca {
    constructor() {
        this.acervo = []; // Array para armazenar objetos Livro
    }

    adicionarLivro(livro) {
        const livroExistente = this.acervo.find(l => l.isbn === livro.isbn);
        if (livroExistente) {
            console.log(`❌ Erro: Livro com ISBN ${livro.isbn} já existe no acervo.`);
            return;
        }
        this.acervo.push(livro);
        console.log(`✅ Livro "${livro.titulo}" adicionado ao acervo.`);
    }

    emprestarLivro(isbn, usuario) {
        const livro = this.acervo.find(l => l.isbn === isbn);

        if (!livro) {
            console.log(`❌ Erro: Livro com ISBN ${isbn} não encontrado.`);
            return false;
        }

        if (livro.disponivel) {
            livro.disponivel = false;
            console.log(`✅ Livro "${livro.titulo}" emprestado para ${usuario.nome}.`);
            return true;
        } else {
            console.log(`⚠️ Livro "${livro.titulo}" já está emprestado.`);
            return false;
        }
    }

    listarLivrosDisponiveis() {
        const disponiveis = this.acervo.filter(livro => livro.disponivel === true);
        console.log("\n--- Livros Disponíveis no Acervo ---");

        if (disponiveis.length === 0) {
            console.log("Nenhum livro disponível no momento.");
            return;
        }

        disponiveis.forEach(livro => {
            console.log(livro.toString());
        });
        console.log("------------------------------------\n");
    }

    devolverLivro(isbn) {
        const livro = this.acervo.find(l => l.isbn === isbn);
        
        if (!livro) {
            console.log(`❌ Erro: Livro com ISBN ${isbn} não encontrado.`);
            return;
        }

        if (!livro.disponivel) {
            livro.disponivel = true;
            console.log(`✅ Livro "${livro.titulo}" devolvido com sucesso.`);
        } else {
            console.log(`⚠️ Livro "${livro.titulo}" já estava marcado como disponível.`);
        }
    }
}