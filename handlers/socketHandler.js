module.exports = (ws) => {
    ws.on('message', function incoming(message) {
        ws.send(`서버로부터 받은 메시지: ${message}`);
    });
    ws.send('서버에 연결되었습니다. 메시지를 보내보세요!');
};
