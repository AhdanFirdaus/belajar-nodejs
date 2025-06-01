const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "dadan",
      email: "dadan@gmail.com",
    },
    {
      nama: "rangki",
      email: "rangki@gmail.com",
    },
    {
      nama: "rakuu",
      email: "rakuu@gmail.com",
    },
  ];
  res.render("index", {
    nama: "Ahdan Firdaus",
    title: "Halaman Home",
    mahasiswa,
    layout: 'layouts/main-layout'
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman About",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
  });
});

app.get("/product/:id", (req, res) => {
  res.send(
    `Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`
  );
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at  http://localhost:${port}`);
});
