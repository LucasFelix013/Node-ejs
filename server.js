/* O "express" vai pegar tudo que escrevermos em ejs, ira renderizar tudo e mostrar no navegador atraves do servidor
*/
const express = require('express')
const app = express()

app.set("view engine", "ejs") //mostrando para o express 

app.get("/", function (req, res) { //Criando uma rota 
    res.render('pages/index')  //render = renderizar 
})

app.get("/sobre", function (req, res) { //Segunda rota 
    res.render("pages/about") 
})

app.listen(8080) // O listem = uma função que ficara ouvindo a porta dentro express 
console.log("Rodando")
