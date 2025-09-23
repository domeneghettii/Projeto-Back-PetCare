const petModel = require("../models/petModel");

const getAllPets = async (req, res) => {
    try {
        const pets = await petModel.getPets();
        res.json(pets);
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar pets." });
    }
};

const getPet = async (req, res) => {
    try {
        const pet = await petModel.getPetById(req.params.id);
        if (!pet) {
            return res.status(404).json({ error: "Pet não encontrado." });
        }
        res.json(pet);
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar pet." });
    }
};
const createPet = async (req, res) => {
  try {
    const { nome, especie, raca, idade, observacoes, tutor_id } = req.body;
    const foto = req.file ? req.file.filename : null; // Pega o nome do arquivo se existir

    const pet = await petModel.createPet(nome, especie, raca, idade, observacoes, foto, tutor_id);
    res.status(201).json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const updatePet = async (req, res) => {
    try {
        const { nome, especie, raca, idade, observacoes, tutor_id } = req.body;
        const foto = req.file ? req.file.filename : null;

        const updatedPet = await petModel.updatePet(
            req.params.id,
            nome,
            especie,
            raca,
            idade,
            observacoes,
            tutor_id,
            foto
        );

        res.json(updatedPet);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao atualizar pet." });
    }
};

const deletePet = async (req, res) => {
    try {
        const result = await petModel.deletePet(req.params.id);
        if (result.error) {
            return res.status(404).json(result);
        }
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: "Erro ao deletar pet." });
    }
};

module.exports = {
    getAllPets,
    getPet,
    createPet,
    updatePet,
    deletePet
};