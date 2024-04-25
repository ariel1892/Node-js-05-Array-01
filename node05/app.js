const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8888;

const server = http.createServer((req, res) => {
   
    const filePath = path.join(__dirname, 'index.html');

    
    if (req.url === '/' || req.url === '/index.html') {
 
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error interno del servidor');
            } else {
        
                res.writeHead(200, { 'Content-Type': 'text/html' });
        
                res.end(content, 'utf-8');
            }
        });
    } else {
    
        res.writeHead(404);
        res.end('Página no encontrada');
    }
});


server.listen(PORT, () => {
    console.log(`Servidor web escuchando en http://localhost:${PORT}`);
});
