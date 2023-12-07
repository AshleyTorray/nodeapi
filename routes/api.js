var express = require('express');
var router = express.Router();


let admin = require('./api/admin.route');
let client = require('./api/client.route');
let proxy = require('./api/proxy.route');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<h1>welcome proxy changer backend</h1>');
});

router.use('/admin', admin);
router.use('/client', client);
router.use('/proxy', proxy);
module.exports = router;
