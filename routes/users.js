var express = require('express');
var router = express.Router();
const {
  getData,
  setUserData,
  verfyuser,
  getNotes,
  findNoteWithId,
  createNewNote,
  loginUser
}= require("../controller/userController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getusers',getData)
router.get('/setusers/:id/:pass', setUserData)
router.get('/verifyuser/:id/:pass',verfyuser)

router.post('/login', loginUser);


router.get("/notes",getNotes)
router.get("/notes/:id",findNoteWithId)
router.post("/notes",createNewNote)
module.exports = router;
