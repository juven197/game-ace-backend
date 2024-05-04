var express = require("express");
var app = express();

// set the view engine to ejs
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

// address page
app.get("/address", function (req, res) {
  res.render("pages/address");
});

// cart page
app.get("/cart", function (req, res) {
  res.render("pages/cart");
});

// product page
app.get("/product", function (req, res) {
  res.render("pages/product");
});

// allproducts page
app.get("/allproduct", function (req, res) {
  res.render("pages/allproduct");
});

// pc page
app.get("/pc", function (req, res) {
  res.render("pages/pc");
});

// nintendo page
app.get("/nintendo", function (req, res) {
  res.render("pages/nintendo");
});

// login page
app.get("/login", function (req, res) {
  res.render("pages/login");
});

// xbox page
app.get("/xbox", function (req, res) {
  res.render("pages/xbox");
});

// ps4 page
app.get("/ps4", function (req, res) {
  res.render("pages/ps4");
});

// product
app.get("/GodOfWar", (req, res) => {
  res.render("product/GodOfWar");
});
app.get("/uncharted4", (req, res) => {
  res.render("product/uncharted4");
});
app.get("/horizonZeroDawn", (req, res) => {
  res.render("product/horizonZeroDawn");
});

app.get("/ps5", (req, res) => {
  res.render("product/ps5");
});

app.get("/xboxSeriesX", (req, res) => {
  res.render("product/xboxSeriesX");
});

app.get("/nintedoSwitchLite", (req, res) => {
  res.render("product/nintedoSwitchLite");
});

app.get("/logitechHeadphones", (req, res) => {
  res.render("product/logitechHeadphones");
});

app.get("/dualShock4Controller", (req, res) => {
  res.render("product/dualShock4Controller");
});

app.get("/xboxOneController", (req, res) => {
  res.render("product/xboxOneController");
});

app.get("/bloodborne", (req, res) => {
  res.render("product/bloodborne");
});
app.get("/mortalCombat11", (req, res) => {
  res.render("product/mortalCombat11");
});

app.get("/residentEvil10", (req, res) => {
  res.render("product/residentEvil10");
});

app.get("/devilMayCry5", (req, res) => {
  res.render("product/devilMayCry5");
});

app.get("/doomEternal", (req, res) => {
  res.render("product/doomEternal");
});

app.get("/legendOfZelda", (req, res) => {
  res.render("product/legendOfZelda");
});

app.get("/superMarioOdyssey", (req, res) => {
  res.render("product/superMarioOdyssey");
});

app.get("/fireEmblemThreeHouses", (req, res) => {
  res.render("product/fireEmblemThreeHouses");
});

app.get("/syberia2", (req, res) => {
  res.render("product/syberia2");
});

app.get("/mmasterix", (req, res) => {
  res.render("product/mmasterix");
});

app.get("/borderlands", (req, res) => {
  res.render("product/borderlands");
});

app.get("/pvz", (req, res) => {
  res.render("product/pvz");
});

app.get("/astralChain", (req, res) => {
  res.render("product/astralChain");
});

app.listen(8080);
console.log("Server is listening on port 8080");
