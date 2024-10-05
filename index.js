import http from 'http';

const PORT = 3300;

const rotas = {
    '/': 'ROTA PRINCIPAL',
    '/teste': 'ROTA DE TESTE',
    '/teste2': 'AAAAAAAAA'
}
const server = http


server.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'}),
    res.end(rotas[req.url])
})

server.listen(PORT, ()=> {
    console.log('SERVIDOR ESTÁ ONLINE')
})