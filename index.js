const express = require('express');


const app = express();


app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/teste", function (req, res) {
  res.send("Hello Teste");
});

app.get("/login/:email/:senha", function (req, res) {
    res.send(req.params.email);
  });

app.get("/htmlteste", function (req,res) {
  res.sendFile(__dirname + "/html/index.html");
});


app.listen(3031, function () {
  console.log("Server is running on port 3031");
});