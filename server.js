const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

console.log('WebSocket server started on ws://0.0.0.0:8080');

wss.on('connection', function connection(ws, req) {
  console.log('New client connected:', req.socket.remoteAddress);

  ws.on('message', function incoming(message) {
    console.log('Received:', message.toString());
    ws.send(`Echo from server: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  ws.send('Welcome to WebSocket Cloud Server!');
});
