const express = require('express');
const router = express.Router();

const proxyController = require('../../controller/client/proxyController');

router.get('/', proxyController.getProxy);
module.exports = router;