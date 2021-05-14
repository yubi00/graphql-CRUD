const { v4: uuidv4 } = require("uuid");
const pool = require("../db/config");

const mutationResolvers = {
  async createUser(parent, args) {
    try {
      const id = uuidv4();
      const { name, email } = args;
      const newUser = await pool.query(
        "INSERT INTO persons(id,name,email) VALUES ($1,$2,$3) RETURNING *",
        [id, name, email]
      );
      return newUser.rows[0];
    } catch (err) {
      console.log(err.message);
    }
  },
  async updateUser(parent, { id, data }) {
    const { name, email } = data;

    const user = await pool.query(`SELECT * FROM persons WHERE id = '${id}'`);
    if (user.rowCount === 0)
      throw new Error(`User with the id ${id} does not exist`);

    const updatedUser = await pool.query(
      "UPDATE persons SET name=$1,email=$2 WHERE id = $3 RETURNING *",
      [name ? name : user.rows[0].name, email ? email : user.rows[0].email, id]
    );

    return updatedUser.rows[0];
  },
  async deleteUser(parent, { id }) {
    const user = await pool.query(`SELECT * FROM persons WHERE id = '${id}'`);
    if (user.rowCount === 0)
      throw new Error(`User with the id ${id} does not exist`);

    await pool.query(`DELETE FROM persons WHERE id='${id}'`);

    const remainingUsers = await pool.query("SELECT * FROM persons");
    return remainingUsers.rows;
  }
};

module.exports = {
  mutationResolvers
};
