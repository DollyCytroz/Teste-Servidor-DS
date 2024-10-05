import http from 'http'

const PORT = 3300;

const rotas = {
    '/': 'ROTA PRINCIPAL',
    '/teste': 'ROTA DE TESTE',
    '/teste2': 'AAAAAAAAA'
}
const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'}),
    res.end(rotas[req.url])
})


console.log('até aqui');

server.listen(PORT,()=>{
    console.log('aqui foi tmb')
})