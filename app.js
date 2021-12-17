const express = require('express');
const app = express();

const html = require('./helpers/services').html

const mainColor = 'green';
const mainThemeColor = { green: 'green', navy: 'navy' };
const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.send(html(mainThemeColor, mainColor));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
