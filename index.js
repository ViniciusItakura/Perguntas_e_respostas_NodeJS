const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/:nome/:lang", (req, res) => {
    const nome = req.params.nome;
    const lang = req.params.lang;
    const exibirMsg = false;

    const produtos = [
        { nome: "Doritos", preco: 314 },
        { nome: "Coca-cola", preco: 5 },
        { nome: "Leite", preco: 1.45 },
        { nome: "Carne", preco: 5 },
        { nome: "Redbull", preco: 6 },
        { nome: "Nescau", preco: 4 }
    ];

    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "klitCode",
        inscritos: 8000,
        msg: exibirMsg,
        produtos: produtos
    });
});

app.listen(8080, () => {
    console.log("App rodando");
});