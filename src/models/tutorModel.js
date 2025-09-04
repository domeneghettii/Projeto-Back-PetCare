const pool = require("../config/database");

const getTutors = async () => {
  const result = await pool.query("SELECT * FROM tutors");
  return result.rows;
};


const getTutorById = async (id) => {
  const result = await pool.query("SELECT * FROM tutors WHERE id=$1", [id]);
  return result.rows[0];
};


const createTutor = async ({ name, phone }) => {
  const result = await pool.query(
    "INSERT INTO tutors (name, phone) VALUES ($1,$2) RETURNING *",
    [name, phone]
  );
  return result.rows[0];
};

const updateTutor = async (id, { name, phone }) => {
  const result = await pool.query(
    "UPDATE tutors SET name=$1, phone=$2 WHERE id=$3 RETURNING *",
    [name, phone, id]
  );
  return result.rows[0];
};


const deleteTutor = async (id) => {
  const result = await pool.query("DELETE FROM tutors WHERE id=$1 RETURNING *", [id]);
  return result.rows[0];
};

module.exports = { getTutors, getTutorById, createTutor, updateTutor, deleteTutor };