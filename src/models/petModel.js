const pool = require("../config/database");

const getPets = async () => {
  const result = await pool.query(
    `SELECT pets.*, tutors.name AS tutor_name
     FROM pets
     LEFT JOIN tutors ON pets.tutor_id = tutors.id`
  );
  return result.rows;
};

const getPetById = async (id) => {
  const result = await pool.query(
    `SELECT pets.*, tutors.name AS tutor_name
     FROM pets
     LEFT JOIN tutors ON pets.tutor_id = tutors.id
     WHERE pets.id = $1`,
    [id]
  );
  return result.rows[0];
};


const createPet = async ({ name, species, breed, age, tutor_id, notes, photo }) => {
  const result = await pool.query(
    `INSERT INTO pets (name, species, breed, age, tutor_id, notes, photo)
     VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
    [name, species, breed, age, tutor_id, notes, photo]
  );
  return result.rows[0];
};


const updatePet = async (id, { name, species, breed, age, tutor_id, notes, photo }) => {
  const result = await pool.query(
    `UPDATE pets
     SET name=$1, species=$2, breed=$3, age=$4, tutor_id=$5, notes=$6, photo=$7
     WHERE id=$8 RETURNING *`,
    [name, species, breed, age, tutor_id, notes, photo, id]
  );
  return result.rows[0];
};


const deletePet = async (id) => {
  const result = await pool.query("DELETE FROM pets WHERE id=$1 RETURNING *", [id]);
  return result.rows[0];
};

module.exports = { getPets, getPetById, createPet, updatePet, deletePet };