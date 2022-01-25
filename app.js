const express = require('express');
const app = express();

const html = require('./helpers/services').html

const mainColor = 'orange';
const mainThemeColor = { green: 'green', navy: 'navy', orange: 'orange' };
const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.send(html(mainThemeColor, mainColor));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
