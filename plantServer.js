const net = require('net');  // Server Code .
const Plant = require('./plant');
const myPlant = new Plant();
const server = net.createServer((socket) => {
   console.log('Welcome to Echo Server\r\n');
   socket.on('data', (chunk) => {
       socket.write(chunk);
   });
   socket.on('end', socket.end);
});

server.listen(3000, () => {
console.log('server is up');
});
