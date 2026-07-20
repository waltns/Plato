const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
        title: "Plato",
        width: 450,
        height: 800,
        minWidth: 450,
        maxWidth: 450,
        minHeight: 800,
        maxHeight: 800,

        resizable: false,
        maximizable: false,
        fullscreenable: false,

        autoHideMenuBar: true,
        backgroundColor: "#000000",

        icon: path.join(__dirname, "icon.ico"),

        webPreferences: {
            contextIsolation: true
        }
    });

    win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});