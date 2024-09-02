const express = require('express');
const app = express();

app.use((req, res) => {
    // console.log("リクエストを受け取りました。");
    res.send('<p>段落です</p>');
})

app.listen(8080, () => {
    console.log("リクエストをポート8080で待機中");
})