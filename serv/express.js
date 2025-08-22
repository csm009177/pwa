const express = require('express');
const app = express();
const port = 8080;
// 조금만 말해도 잘 알아듣는거 같습니다
const serv = app.use(express.static(__dirname + '/src')); 

serv.listen(port, () => {
    console.log(`가동되었습니다 클릭하세요 => http://localhost:${port}`);
});