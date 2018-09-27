const electron = require('electron');
const url = require('url');
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow;
const ipcMain = electron.remote.ipcMain;

window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js');
window.Boostrap = require('bootstrap');

function loadBody(body) {
    let renderer = document.getElementById('content_renderer');
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", 'src://main/html/' + body + '.html', true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                renderer.innerHTML = this.responseText;
                loadScripts(renderer);
            } else {
                loadError(renderer, 404);
            }
        }
    };
    xhttp.send();
}

function loadElement(element) {
    let renderer = document.currentScript.parentNode;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", 'src://main/html/element/' + element + '.html', true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                renderer.innerHTML = this.responseText;
                loadScripts(renderer);
            } else {
                loadError(renderer, 404);
            }
        }
    };
    xhttp.send();
}

function loadError(renderer, error) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", 'src://main/html/error/error' + error + '.html', true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            renderer.innerHTML = this.responseText;
            loadScripts(renderer);
        }
    };
    xhttp.send();
}

function loadScripts(renderer) {
    let scripts = renderer.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
        eval(scripts[i].innerHTML);
    }
}

// Load scripts
function script(name) {
    let controller = document.querySelector('#controller');
    let head = document.getElementsByTagName('head')[0];
    let s = document.createElement('script');
    if (!!controller) head.removeChild(controller);
    s.id = 'controller';
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'src://main/js/' + name + '.js';
    head.appendChild(s);
}
