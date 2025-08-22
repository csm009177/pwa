const express = require('express');
const serv = express();
const port = 8080;

serv.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

serv.listen(port, () => {
    console.log(`가동되었습니다 클릭하세요 => http://localhost:${port}`);
});