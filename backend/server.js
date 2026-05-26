const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/temperature", (req, res) => {
  console.log(req.body);

  res.send("Temperature Received");
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});