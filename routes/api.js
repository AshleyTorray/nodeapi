var express = require('express');
var router = express.Router();


let admin = require('./api/admin.route');
let client = require('./api/client.route');
// const {
//   getData,
//   setUserData,
//   verfyuser,
//   getNotes,
//   findNoteWithId,
//   createNewNote,
//   loginUser
// }= require("../controller/userController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<h1>welcome proxy changer backend</h1>');
});

// router.get('/getusers',getData)
// router.get('/setusers/:id/:pass', setUserData)
// router.get('/verifyuser/:id/:pass',verfyuser)

// router.post('/login', loginUser);


// router.get("/notes",getNotes)
// router.get("/notes/:id",findNoteWithId)
// router.post("/notes",createNewNote)

router.use('/admin', admin);
router.use('/client', client);
module.exports = router;
