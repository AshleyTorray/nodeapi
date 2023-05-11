var express = require('express');
var router = express.Router();
const {
  getData
}= require("../controller/userController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getusers',getData)

module.exports = router;
