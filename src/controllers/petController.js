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
    const { name, species, breed, age, tutor_id, notes, photo } = req.body;
    const newPet = await petModel.createPet({ name, species, breed, age, tutor_id, notes, photo });
    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar pet." });
  }
};

const updatePet = async (req, res) => {
  try {
    const { name, species, breed, age, tutor_id, notes, photo } = req.body;
    const updatedPet = await petModel.updatePet(req.params.id, { name, species, breed, age, tutor_id, notes, photo });
    if (!updatedPet) return res.status(404).json({ message: "Pet não encontrado para atualizar." });
    res.json(updatedPet);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar pet." });
  }
};


const deletePet = async (req, res) => {
  try {
    const deletedPet = await petModel.deletePet(req.params.id);
    if (!deletedPet) return res.status(404).json({ message: "Pet não encontrado para excluir." });
    res.json({ message: "Pet excluído com sucesso.", pet: deletedPet });
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir pet." });
  }
};

module.exports = { getAllPets, getPet, createPet, updatePet, deletePet };