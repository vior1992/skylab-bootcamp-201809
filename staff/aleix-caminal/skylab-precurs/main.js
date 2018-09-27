const electron = require('electron');
const url = require('url');
const path = require('path');
const {app, BrowserWindow, Menu, ipcMain} = electron;
let mainWindow;

// Listen for the app to be ready
app.on('ready', function(event) {
    const protocol = electron.protocol;
    protocol.registerFileProtocol('src', (request, callback) => {
        callback({path: path.join(__dirname, 'src/', request.url.substr(6))});
    });

    protocol.registerFileProtocol('node', (request, callback) => {
        callback({path: path.join(__dirname, 'node_modules/', request.url.substr(7))});
    });

    // Load layout into window
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL('src://main/html/layout/default.html');
});
