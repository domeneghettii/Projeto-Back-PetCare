const petModel = require("../models/petModel");

const getAllPets = async (req, res) => {
  try {
    const pets = await petModel.getPets();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar pets." });
  }
};

const getPet = async (req, res) => {
  try {
    const pet = await petModel.getPetById(req.params.id);
    if (!pet) return res.status(404).json({ message: "Pet não encontrado." });
    res.json(pet);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar pet." });
  }
};

const createPet = async (req, res) => {
  try {
    const { nome, especie, raca, idade, observacoes, foto, tutor_id } = req.body;
    const newPet = await petModel.createPet(nome, especie, raca, idade, observacoes, foto, tutor_id);
    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar pet." });
  }
};
const updatePet = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, especie, raca, idade, observacoes, tutor_id } = req.body;

        const petAtualizado = await petModel.updatePet(id, nome, especie, raca, idade, observacoes, tutor_id);

        if (!petAtualizado) {
            return res.status(404).json({ message: "Pet não encontrado." });
        }

        res.json(petAtualizado);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar pet." });
    }
};


const deletePet = async (req, res) => {
  try {
    await petModel.deletePet(req.params.id);
    res.json({ message: "Pet excluído com sucesso." });
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir pet." });
  }
};

module.exports = { getAllPets, getPet, createPet, updatePet, deletePet };