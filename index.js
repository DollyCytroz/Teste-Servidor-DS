const express = require("express")
const server = express()
const passageiros = require("./src/teste.json")
const funcionarios = require("./src/funcionario.json")

server.get("/", (req, res) => {
    return res.json({mensagem: "SEJA BEM VINDO"})
})

server.get("/kabum", (req, res) => {
    return res.json({mensagem: "Você ira explodir em 3, 2, 1.... Parabéns, você esta vivo, por enquanto...."})
})

server.get("/viagem", (req, res) => {
    return res.json(passageiros)
})

server.get("/funcionarios", (req, res) => {
    return res.json(funcionarios)
})

server.listen(3020, () => {
    console.log('Server ON')
})