const express = require('express');
const path = require('path');
const WebSocket = require('ws');
const config = require('../config/config');
const socketHandler = require('../handlers/socketHandler');

// Express HTTP 서버 (3000번 포트)
const app = express();
const HTTP_PORT = 3000;
app.use(express.static(path.join(__dirname, '../public')));
app.listen(HTTP_PORT, () => {
    console.log(`HTTP 서버가 http://localhost:${HTTP_PORT} 에서 실행 중입니다.`);
});

// WebSocket 서버 (8080번 포트)
const wss = new WebSocket.Server({ port: config.port });
wss.on('connection', (ws, req) => {
    const ip = req.socket.remoteAddress;
    console.log(`새 클라이언트 접속: ${ip}`);
    socketHandler(ws);
});
console.log(`웹소켓 서버가 ${config.port} 포트에서 실행 중입니다.`);
