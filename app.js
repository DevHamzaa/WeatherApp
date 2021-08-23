const express = require("express");
const path = require("path");
const hbs = require("hbs");
// ...................
// Global Varriables etc here
const app = express();
const port = process.env.PORT || 3000;
const staticPath = path.join(__dirname, "./public");
const templatePath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");
// ..................
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));
app.get("/", (req, res) => {
  req;
  res.render("index");
});
app.get("/about", (req, res) => {
  req;
  res.render("about");
});
app.get("/weather", (req, res) => {
  req;
  res.render("weather");
});
app.get("*", (req, res) => {
  req;
  res.render("404page");
});

// Listning to port
app.listen(port, () => {
  console.log(`Listningg to port ${port}`);
});
