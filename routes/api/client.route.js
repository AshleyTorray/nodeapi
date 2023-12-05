const express = require('express');
const router = express.Router();

const userController = require('../../controller/client/userController');
const vpnController = require('../../controller/client/vpnController');

router.post('/login', userController.loginUser);
router.get('/vpn', vpnController.connectToServer);
module.exports = router;