class Personagem {
    constructor(nome, vida, forca) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
    }

    atacar(outroPersonagem) {
        if (this.vida <= 0) {
            console.log(`❌ ${this.nome} está esgotado e não pode atacar!`);
            return;
        }
        
        const dano = this.forca;
        
        console.log(`\n⚔️ ${this.nome} ataca ${outroPersonagem.nome} com ${dano} de dano!`);
        outroPersonagem.receberDano(dano);
    }

    receberDano(dano) {
        this.vida -= dano;
        if (this.vida <= 0) {
            this.vida = 0;
            console.log(`💀 ${this.nome} recebeu um golpe fatal! Vida restante: ${this.vida}.`);
        } else {
            console.log(`🤕 ${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}.`);
        }
    }

    exibirStatus() {
        console.log(`\n--- Status de ${this.nome} ---`);
        console.log(`Vida: ${this.vida}`);
        console.log(`Força: ${this.forca}`);
        console.log('---------------------------');
    }
}

// --- Simulação da Batalha ---
const heroi = new Personagem("Aragorn", 120, 25);
const monstro = new Personagem("Orc Guerreiro", 80, 15);

heroi.exibirStatus();
monstro.exibirStatus();

console.log("\n*** INÍCIO DA BATALHA! ***");

// Turno 1
heroi.atacar(monstro); 
monstro.atacar(heroi); 

// Turno 2
heroi.atacar(monstro); 
monstro.atacar(heroi); 

// Turno 3
heroi.atacar(monstro); 

// Status Final
console.log("\n*** FIM DA BATALHA! ***");
heroi.exibirStatus();
monstro.exibirStatus();