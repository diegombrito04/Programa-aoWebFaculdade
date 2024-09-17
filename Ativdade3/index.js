const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();
const port = 3000;

// Rota de soma
app.get('/somar/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.somar(a, b);
    res.send(`Resultado da soma: ${resultado}`);
});

// Rota de subtração
app.get('/subtrair/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.subtrair(a, b);
    res.send(`Resultado da subtração: ${resultado}`);
});

// Rota de multiplicação
app.get('/multiplicar/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.multiplicar(a, b);
    res.send(`Resultado da multiplicação: ${resultado}`);
});

// Rota de divisão
app.get('/dividir/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.dividir(a, b);
    res.send(`Resultado da divisão: ${resultado}`);
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

