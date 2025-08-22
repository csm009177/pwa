const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`가동되었습니다 클릭하세요 => http://localhost:${port}`);
});
