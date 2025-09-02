
// Importa o módulo do Express.
const express = require('express');

// Cria uma instância do Express, que é o nosso servidor.
const app = express();

// Define a porta em que o servidor irá rodar.
const port = 3000;

// Cria uma rota (endpoint) para o caminho raiz ('/').
// Quando o usuário acessar http://localhost:3000/, esta função será executada.
app.get('/', (req, res) => {
    // Envia uma resposta de texto simples para o navegador.
    // res.send('Olá, mundo!');

    // req.hostname: o nome do host (ex: 'localhost').
    const host = req.hostname;
    // req.originalUrl: a URL completa da requisição.
    const url = req.originalUrl;
    // req.method: o método HTTP usado ('GET', 'POST', etc.).
    const metodo = req.method;

    const info = `
        Você fez uma requisição usando o método ${metodo} para a URL ${url}.
        O host do seu servidor é ${host}.
    `;

    res.send(info);
});

app.post('/aluno', (req, res) => {
    const alunos = {
        "aluno": "José",
        "numero": "0129399123"
    }

    req.body = alunos
})
app.post('/auth', (req, res) => {
    res.send(`Você fez uma requisição! Método: ${req.method}!`);
});

// Inicia o servidor e o faz "escutar" requisições na porta especificada.
// Quando o servidor estiver pronto, a mensagem no console será exibida.
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});