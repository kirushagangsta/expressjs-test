var express = require('express');
var router = express.Router();
var cors = require("cors")

/* GET users listing. */
router.get('/', cors(), function(req, res, next) {
  console.log(req.res)
  res.json({ res: "ПОШЕЛ НАХУЙ" });
});

module.exports = router;
