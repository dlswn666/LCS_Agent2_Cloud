const express = require('express');
const path = require('path');
const http = require('http');
const WebSocket = require('ws');
const config = require('../config/config');
const socketHandler = require('../handlers/socketHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws, req) => {
    const ip = req.socket.remoteAddress;
    console.log(`새 클라이언트 접속: ${ip}`);
    socketHandler(ws);
});

server.listen(PORT, () => {
    console.log(`HTTP & WebSocket 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
