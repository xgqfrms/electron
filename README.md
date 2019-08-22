# electron-quick-start


https://electronjs.org/#get-started

```sh
$ npm i -D electron

# electron cli ???


```

https://www.electron.build/cli

https://electronjs.org/docs/tutorial/boilerplates-and-clis


# build app

https://electronjs.org/docs/tutorial/application-packaging


## install

```bash
# Clone this repository
$ git clone https://github.com/electron/electron-quick-start

# Go into the repository
$ cd electron-quick-start

# Install dependencies
$ npm i

# Run the app
$ npm start

```


## Resources for Learning Electron

https://electronjs.org/docs

https://electronjs.org/community#boilerplates


https://github.com/electron/simple-samples 

https://github.com/electron/electron-api-demos 

https://github.com/hokein/electron-sample-apps


https://electronjs.org/blog/simple-samples


## docs

https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes

https://electronjs.org/docs/tutorial/first-app#trying-this-example



## A basic Electron application needs just these files:

https://electronjs.org/docs/tutorial/quick-start

1. `package.json` - Points to the app's main file and lists its details and dependencies.

2. `main.js` - Starts the app and creates a browser window to render HTML.>

> This is the app's **main process**.

4. `index.html` - A web page to render. 

> This is the app's **renderer process**.


```js

// const electron = require("electron");

const {
    app,
    BrowserWindow,
} = require("electron");

function createWindow () {   
    // 创建浏览器窗口
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        }
    });
    // 加载index.html文件
    win.loadFile("index.html");
}

app.on("ready", createWindow);


```


## webpack & babel & typescript support

> TODO...

