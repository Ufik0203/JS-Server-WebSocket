const WebSocket = require('ws');

const socket = new WebSocket('ws://localhost:3000');

socket.on('open', () => {
    console.log('Conected to server');
    socket.send('Hello, Server!!!');
});

socket.on('message', (message) => {
    console.log('Received message: ${message}');
    socket.close;
});

socket.on('close', () => {
    console.log('Connection closed');
});