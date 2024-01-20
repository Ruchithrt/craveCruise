const express = require("express");
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    console.log(global.food);
    res.send([global.food, global.category]);
  } catch (error) {
    console.log(error);
    res.send("server error");
  }
});

module.exports = router;
