const pool = require("../db/config");

const queryResolvers = {
  async Users() {
    const data = await pool.query("SELECT * FROM persons ORDER BY id");
    return data.rows;
  },
  async User(parent, { id }) {
    const user = await pool.query(`SELECT * FROM persons WHERE id = '${id}'`);
    return user.rows[0];
  }
};

module.exports = {
  queryResolvers
};
