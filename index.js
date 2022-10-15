const express = require("express");
const app = express();
const port = 5000;
const user = require("./user.json");
var cors = require('cors')
app.use(cors())

app.get("/", (req, res) => {
  res.send("Iphone Server Running! Congrats");
});

app.get("/users", (req, res) => {
  res.send(user);
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("Looking for req id:", id);

  const singleUser = user.find(user => user.id === id) || {};
  res.send(singleUser);
});

app.listen(port, () => {
  console.log(`Iphone Server is running on port ${port}`);
});
