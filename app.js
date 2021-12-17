const http = require('http');
const os = require('os');
const networkInterfaces = os.networkInterfaces();

const mainColor = 'green';
const mainThemeColor = { green: 'green', navy: 'navy' };
const hostname = '127.0.0.1';
const port = process.env.PORT || 8080;
let html = `<body style="background-color: ${getMainColor(mainColor)};">`
html += '<h1 style="color: white;">Node Express application</h1>';
html += '<h3 style="color: white;">version: 9.0</h3>';
html += '<p style="color: white;">local ip address: ' + getLocalIpAddress() + '</p>';
html += '<hr/>';
html += '<p>environment variables list:</p>';
html += getVariablesList();
html += '</body>';

function getMainColor(color) {
    return mainThemeColor[color]
}

function getLocalIpAddress() {
    let ip = '';
    for (const value in networkInterfaces) {
        ip += networkInterfaces[value][0]['address'] + ', ';
    }

    return ip.slice(0, ip.length - 2);
}

function getVariablesList() {
    let variablesList = '<ul style="color: white";>';
    const envVariables = process.env;
    for (const variable in envVariables) {
        const value = envVariables[variable];
        variablesList += `<li><span style="opacity: .9;">${variable}</span> : ${value}</li>`
    }
    variablesList += '</ul>';

    return variablesList;
}




// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end(html);
// });

// server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));




const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(html);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
