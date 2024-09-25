// Importando o express
const express = require('express');
const app = express();

// Configuração da porta
const PORT = 3000;

// Estoque de produtos (armazenamento em memória)
let estoque = {};

// Rota para adicionar um produto ao estoque
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    if (estoque[id]) {
        res.send(`Produto com ID ${id} já existe. Atualizando quantidade.`);
        estoque[id].qtd = parseInt(qtd);
    } else {
        estoque[id] = { nome, qtd: parseInt(qtd) };
        res.send(`Produto ${nome} adicionado com sucesso ao estoque.`);
    }
});

// Rota para listar todos os produtos no estoque
app.get('/listar', (req, res) => {
    if (Object.keys(estoque).length === 0) {
        res.send('O estoque está vazio.');
    } else {
        res.json(estoque);
    }
});

// Rota para remover um produto do estoque
app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    if (estoque[id]) {
        delete estoque[id];
        res.send(`Produto com ID ${id} removido do estoque.`);
    } else {
        res.send(`Produto com ID ${id} não encontrado no estoque.`);
    }
});

// Rota para editar a quantidade de um produto no estoque
app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    if (estoque[id]) {
        estoque[id].qtd = parseInt(qtd);
        res.send(`Quantidade do produto com ID ${id} atualizada para ${qtd}.`);
    } else {
        res.send(`Produto com ID ${id} não encontrado no estoque.`);
    }
});

// Servidor rodando
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

