const {getDataHepler}= require("../model/userHelper")


const getData=async (req,res) =>{
    let user = await getDataHepler()
    res.send(user)
}

module.exports={
    getData
}