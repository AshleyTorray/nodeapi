const {getDataHepler,getNotes_helper,findNoteHelper,createNote}= require("../model/userHelper")


 const getData=async (req,res) =>{
    let user = await getDataHepler()
    res.send(user)
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



module.exports={getNotes,getData,findNoteWithId,createNewNote}