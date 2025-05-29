const http = require("http");
const fs = require("fs");
const { execPath } = require("process");

const port = 3000;

const renderHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Error: file not found");
    } else {
      res.write(data);
    }
    res.end();
  });
};

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    const url = req.url;
    if (url === "/about") {
      renderHTML("./about.html", res);
    } else if (url === "/contact") {
      res.write("<h1>Ini adalah halaman contact</h1>");
      res.end();
    } else {
      // res.write("<h1>Hello World!</h1>");
      renderHTML("./index.html", res);
    }
  })
  .listen(port, () => {
    console.log(`Server listening on port ${port}..`);
  });
