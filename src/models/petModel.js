// src/models/petModel.js

const pool = require("../config/database");

// Buscar todos os pets com dados do tutor
const getPets = async () => {
    const result = await pool.query(
        `SELECT pets.*, tutores.nome AS tutor_nome, tutores.telefone AS tutor_telefone
         FROM pets
         LEFT JOIN tutores ON pets.tutor_id = tutores.id`
    );
    return result.rows;
};

// Buscar um pet específico por ID
const getPetById = async (id) => {
    const result = await pool.query(
        `SELECT pets.*, tutores.nome AS tutor_nome, tutores.telefone AS tutor_telefone
         FROM pets
         LEFT JOIN tutores ON pets.tutor_id = tutores.id
         WHERE pets.id = $1`,
        [id]
    );
    return result.rows[0];
};

// Criar um pet com foto
const createPet = async (
    nome,
    especie,
    raca,
    idade,
    observacoes,
    foto,
    tutor_id
) => {
    const result = await pool.query(
        `INSERT INTO pets (nome, especie, raca, idade, observacoes, foto, tutor_id)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         RETURNING *`,
        [nome, especie, raca, idade, observacoes, foto, tutor_id]
    );
    return result.rows[0];
};

// Atualizar pet (com suporte a foto, se desejado)
const updatePet = async (
    id,
    nome,
    especie,
    raca,
    idade,
    observacoes,
    tutor_id,
    foto = null // opcional
) => {
    let query;
    let params;

    if (foto) {
        query = `
            UPDATE pets
            SET nome = $1, especie = $2, raca = $3, idade = $4,
                observacoes = $5, tutor_id = $6, foto = $7
            WHERE id = $8
            RETURNING *`;
        params = [nome, especie, raca, idade, observacoes, tutor_id, foto, id];
    } else {
        query = `
            UPDATE pets
            SET nome = $1, especie = $2, raca = $3, idade = $4,
                observacoes = $5, tutor_id = $6
            WHERE id = $7
            RETURNING *`;
        params = [nome, especie, raca, idade, observacoes, tutor_id, id];
    }

    const result = await pool.query(query, params);
    return result.rows[0];
};

// Deletar pet
const deletePet = async (id) => {
    const result = await pool.query(
        `DELETE FROM pets WHERE id = $1 RETURNING *`,
        [id]
    );
    if (result.rowCount === 0) {
        return { error: "Pet não encontrado!" };
    }
    return { message: "Pet deletado com sucesso!" };
};

module.exports = {
    getPets,
    getPetById,
    createPet,
    updatePet,
    deletePet,
};
