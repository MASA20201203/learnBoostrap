var express = require("express");
var router = express.Router();

// refer a folder 'views/page/*'
const vpath = (p) => `page/${p}`;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render(vpath("index"));
});

router.get("/test", (req, res, next) => {
  res.render(vpath("test"));
});

module.exports = router;
