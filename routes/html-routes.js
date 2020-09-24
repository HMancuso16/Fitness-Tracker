const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  console.log("GET /")
  res.sendFile(path.join(__dirname, "..public/index.html"));
});

router.get("/excercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  console.log("GET /stats")
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;