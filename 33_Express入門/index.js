const express = require('express');
const app = express();

app.use(() => {
    console.log("リクエストを受け取りました。");
})

app.listen(8080, () => {
    console.log("リクエストをポート8080で待機中");
})