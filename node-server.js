//Http
const http = require("http");
//File System
const fs = require("fs");
//path
const path = require("path");

//PORT
const PORT = 3001;
//create server
const server = http.createServer((req, res) => {
  //define filepath
  let filepath;
  //user request => req.url
  if (req.url == "/") {
    filepath = path.join(__dirname, "index.html");
  } else {
    filepath = path.join(__dirname, `${req.url}.html`);
  }

  //   req.url = "/"
  //     ? (filepath = path.join(__dirname, "index.html"))
  //     : (filepath = path.join(__dirname, `${req.url}&.html`));
  //read content of file
  fs.readFile(filepath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("500 Internal Error", "utf-8");
      }
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log("Server Connected:" & PORT);
});
