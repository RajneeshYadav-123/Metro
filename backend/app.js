const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/temperature", (req, res) => {
  console.log("Metro");
  res.status(200).json({
    message: "Temperature endpoint working"
  });


  // res.send("Temperature Received");
});

// app.listen(5000, () => {
//   console.log("Server Running on Port 5000");
// });

module.exports = app;
