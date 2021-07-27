const express = require("express");

const app = express();

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (request, response, next) => {
  response.sendFile(__dirname + "/views/works.html");
});

app.listen(5000, () => console.log("I´m listening on port 5000"));
