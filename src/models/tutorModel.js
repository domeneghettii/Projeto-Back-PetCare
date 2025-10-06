// Modelo de tutores
const pool = require("../config/database");

const getTutores = async () => {
  const result = await pool.query("SELECT * FROM tutores");
  return result.rows;
};

const getTutorById = async (id) => {
  const result = await pool.query("SELECT * FROM tutores WHERE id = $1", [id]);
  return result.rows[0];
};

const createTutor = async (nome, telefone) => {
  const result = await pool.query(
    "INSERT INTO tutores (nome, telefone) VALUES ($1, $2) RETURNING *",
    [nome, telefone]
  );
  return result.rows[0];
};

const updateTutor = async (id, nome, telefone) => {
  const result = await pool.query(
    "UPDATE tutores SET nome = $1, telefone = $2 WHERE id = $3 RETURNING *",
    [nome, telefone, id]
  );
  return result.rows[0];
};

const deleteTutor = async (id) => {
  await pool.query("DELETE FROM tutores WHERE id = $1", [id]);
};

module.exports = { getTutores, getTutorById, createTutor, updateTutor, deleteTutor };
