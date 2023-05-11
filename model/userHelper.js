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


module.exports = {
    getDataHepler
};
