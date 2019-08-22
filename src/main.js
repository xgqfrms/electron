// "use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2019-08-22
 *
 * @description eletron
 * @augments
 * @example
 * @link
 *
 */

// const log = console.log;

const {
    app,
    BrowserWindow,
} = require("electron");

const path = require("path");

let mainWindow;

function createWindow () {
    // 创建浏览器窗口
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            // nodeIntegration: true,
        },
    });
    // 加载index.html文件
    mainWindow.loadFile("index.html");
    mainWindow.on("closed", function () {
            mainWindow = null;
    });
}

app.on("ready", createWindow)

app.on("window-all-closed", function () {
    if (process.platform !== "darwin"){
        app.quit();
    }
});

app.on("activate", function () {
    if (mainWindow === null){
        createWindow();
    }
});

