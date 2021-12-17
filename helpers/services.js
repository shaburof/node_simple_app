const os = require('os');
const networkInterfaces = os.networkInterfaces();

const getMainColor = function (mainThemeColor, color) {
    return mainThemeColor[color]
}

const getLocalIpAddress = function () {
    let ip = '';
    for (const value in networkInterfaces) {
        ip += networkInterfaces[value][0]['address'] + ', ';
    }

    return ip.slice(0, ip.length - 2);
}

const getVariablesList = function () {
    let variablesList = '<ul style="color: white";>';
    const envVariables = process.env;
    for (const variable in envVariables) {
        const value = envVariables[variable];
        variablesList += `<li><span style="opacity: .9;">${variable}</span> : ${value}</li>`
    }
    variablesList += '</ul>';

    return variablesList;
}

module.exports.html = function (mainThemeColor, mainColor) {
    let html = `<body style="background-color: ${getMainColor(mainThemeColor, mainColor)};">`
    html += '<h1 style="color: white;">Node Express application</h1>';
    html += '<h3 style="color: white;">version: 9.0</h3>';
    html += '<p style="color: white;">local ip address: ' + getLocalIpAddress() + '</p>';
    html += '<hr/>';
    html += '<p>environment variables list:</p>';
    html += getVariablesList();
    html += '</body>';

    return html;
}