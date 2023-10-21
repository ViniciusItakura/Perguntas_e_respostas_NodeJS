const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    const nome = "Vinicius Itakura";
    const lang = "Javascriipt";
    res.render("index", {
        nome: nome,
        lang: lang,
    });
});

app.listen(8080, () => {
    console.log("App rodando");
});