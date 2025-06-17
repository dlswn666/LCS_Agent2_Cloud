const WebSocket = require('ws');
const config = require('../config/config');
const socketHandler = require('../handlers/socketHandler');

const wss = new WebSocket.Server({ port: config.port });

wss.on('connection', socketHandler);

console.log(`웹소켓 서버가 ${config.port} 포트에서 실행 중입니다.`);
