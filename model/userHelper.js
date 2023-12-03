const pool = require("../config/db")

 async function getDataHepler() {
    try {
      const [rows] = await pool.query("SELECT * FROM user");
      return (rows); 
    } catch (error) {
      console.error('Error fetching data from MySQL:', error);
      throw error;
    }
  }
  async function setUserOne(userId, userPass)
  {
    let setUserFlag = false;
    try{
      const[rows] = await pool.query("insert into user(name, password) values('" + userId + "', '" + userPass + "')");
      setUserFlag = true;
      return setUserFlag;
    }catch(error){
      console.error('insert new user error:', error);
      throw error;
    }
  }

   const  getNotes_helper =async ()=>{
    try {
      const [rows] = await pool.query("SELECT * FROM notes");
      return (rows);
    }
    catch(error){
      console.error('Error fetching data from MySQL:', error);
      throw error;
    }
  }

  const findNoteHelper= async(id)=>{
    try{
      const [rows] = await pool.query(`SELECT * FROM notes WHERE id = ?`, [id]);
      return rows[0]
    }
    catch(error){
      console.error('Error fetching data from MySQL:', error);
      throw error;
    }
  }

  const createNote= async(title,content)=>{
    try{
      const [result] = await pool.query(`INSERT INTO notes (title,notes) VALUES (?,?)`,[title,content]);
     return await findNoteHelper(result.insertId)
    }
    catch (error){
      console.error('Error fetching data from MySQL:', error);
      throw error;
    }
  }

  module.exports={getDataHepler,getNotes_helper,findNoteHelper,createNote, setUserOne}


