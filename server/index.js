const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");
const { use } = require("./routes/Createuser");
const cors = require("cors");
mongoDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-origin",
    "Origin , X-Requested-with , Content-Type,Accept"
  );
  next();
});

app.use(express.json());
app.use(cors());

app.use("/api", require("./routes/Createuser"));
app.use("/api", require("./routes/DisplayData"));
app.use("/api", require("./routes/OrderData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
