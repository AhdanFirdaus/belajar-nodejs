const http = require("http");
const fs = require("fs");

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

    switch (url) {
      case "/about":
        renderHTML("./about.html", res);
        break;
      case "/contact":
        renderHTML("./contact.html", res);
      default:
        renderHTML("./index.html", res);
        break;
    }

    // if (url === "/about") {
    //   renderHTML("./about.html", res);
    // } else if (url === "/contact") {
    //   renderHTML("./contact.html", res);
    // } else {
    //   // res.write("<h1>Hello World!</h1>");
    //   renderHTML("./index.html", res);
    // }
  })
  .listen(port, () => {
    console.log(`Server listening on port ${port}..`);
  });
