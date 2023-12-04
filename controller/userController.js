const {getDataHepler,getNotes_helper,findNoteHelper,createNote, setUserOne, verfyUser, loginHelper}= require("../model/userHelper")


 const getData=async (req,res) =>{
    let user = await getDataHepler()
    res.send(user)
}


const verfyuser = async (req,res)=>{
    let userId= req.query.id;
    let userPass = req.query.pass;
    let userFlag = await verfyUser(userId, userPass);
    res.send(userFlag);
}

const setUserData = async (req,res) =>{
    let userId= req.params.id;
    let userPass = req.params.pass;
    console.log(userId, userPass);
    let setUserFlag = await setUserOne(userId, userPass);
    res.send(setUserFlag);
}
 const getNotes=async (req,res)=>{
    let notes = await getNotes_helper()
    res.send(notes)
}

const findNoteWithId = async(req,res)=>{
    let note = await findNoteHelper(req.params.id)
    res.send(note)
}
const createNewNote= async(req,res)=>{
    let {title,content}= req.body
    let newNote = await createNote(title,content)
    res.send(newNote)
}

const loginUser = async(req, res) => {
    let userEmail = req.query.email;
    let userPass = req.query.password;
    let loginFlag = await loginHelper(userEmail,  userPass);
    res.send(loginFlag);
}





module.exports={getNotes,getData,findNoteWithId,createNewNote, setUserData, verfyuser, loginUser}
