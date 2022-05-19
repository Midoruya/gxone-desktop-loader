const { app, BrowserWindow, ipcMain, shell } = require("electron");
var request = require("request");
const dns = require("dns");
const { Cookie } = require("request-cookies");

module.exports = () => {
  ipcMain.on("open-external-browser", (event, arg) => shell.openExternal(arg));
  ipcMain.on("close-programm", () => app.quit());
  ipcMain.on("minimize-focus-windows", () =>
    BrowserWindow.getFocusedWindow().minimize()
  );
  ipcMain.on("loading-block-loading", (event) => {
    event.sender.send("loading-block-sender", "check internet connection");
    new Promise((resolve) => {
      setTimeout(() => {
        dns.resolve("gxone.ru", (error) => {
          if (error) app.quit();
        });
        resolve();
      }, 8000);
    }).then(() => {
      event.sender.send(
        "loading-block-sender",
        "internet connection is established"
      );
      event.sender.send("redirect-to-auth");
    });
  });
  ipcMain.on("send-auth-request", (event, arg) => {
    var myJSONObject = {
      username: arg["username"],
      password: arg["password"],
    };
    request(
      {
        withCredentials: true,
        url: "http://gxone.ru:5000/Account/SingIn",
        method: "POST",
        formData: myJSONObject,
      },
      function (error, response) {
        let cookie = new Cookie(response.headers["set-cookie"][0]);
        BrowserWindow.getFocusedWindow().webContents.session.cookies.set({
          url: "gxone.ru",
          name: cookie.key,
          value: cookie.value,
        });
        console.log(response.headers["set-cookie"]);
      }
    );
    //event.sender.send("");
  });
};
