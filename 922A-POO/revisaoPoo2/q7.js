class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    toString() {
        return `${this.nome} (R$ ${this.preco.toFixed(2)})`;
    }
}

class Carrinho {
    constructor() {
        this.itens = []; // Array para armazenar objetos Produto
    }

    adicionarProduto(produto) {
        this.itens.push(produto);
        console.log(`+ ${produto.nome} adicionado ao carrinho.`);
    }

    calcularTotal() {
        let total = 0;
        for (const produto of this.itens) {
            total += produto.preco;
        }
        return total;
    }

    listarItens() {
        console.log("\n--- Itens no Carrinho ---");
        if (this.itens.length === 0) {
            console.log("O carrinho está vazio.");
            return;
        }
        this.itens.forEach(item => console.log(`- ${item.toString()}`));
        console.log("------------------------");
    }
}

class Cliente {
    constructor(nome) {
        this.nome = nome;
        // O Cliente possui um Carrinho
        this.carrinho = new Carrinho(); 
    }
}

// --- Simulação da Compra ---

// 1. Criar produtos
const monitor = new Produto("Monitor UltraWide", 1250.00);
const mouse = new Produto("Mouse Gamer RGB", 185.50);
const teclado = new Produto("Teclado Mecânico", 320.99);

// 2. Criar cliente
const clienteA = new Cliente("Lucas Ferreira");

console.log(`\nBem-vindo à loja, ${clienteA.nome}!`);

// 3. Adicionar produtos ao carrinho do cliente
clienteA.carrinho.adicionarProduto(monitor);
clienteA.carrinho.adicionarProduto(mouse);
clienteA.carrinho.adicionarProduto(teclado);
clienteA.carrinho.adicionarProduto(teclado); 

// 4. Listar e calcular o total
clienteA.carrinho.listarItens();

const totalDaCompra = clienteA.carrinho.calcularTotal();

console.log(`💲 Total da compra: R$ ${totalDaCompra.toFixed(2)}`);