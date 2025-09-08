const tutorModel = require("../models/tutorModel");

const getAllTutores = async (req, res) => {
  try {
    const tutores = await tutorModel.getTutores();
    res.json(tutores);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar tutores." });
  }
};

const getTutor = async (req, res) => {
  try {
    const tutor = await tutorModel.getTutorById(req.params.id);
    if (!tutor) return res.status(404).json({ message: "Tutor não encontrado." });
    res.json(tutor);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar tutor." });
  }
};

const createTutor = async (req, res) => {
  try {
    const { nome, telefone } = req.body;
    const newTutor = await tutorModel.createTutor(nome, telefone);
    res.status(201).json(newTutor);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar tutor." });
  }
};

const updateTutor = async (req, res) => {
  try {
    const { nome, telefone } = req.body;
    const updatedTutor = await tutorModel.updateTutor(req.params.id, nome, telefone);
    if (!updatedTutor) return res.status(404).json({ message: "Tutor não encontrado." });
    res.json(updatedTutor);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar tutor." });
  }
};

const deleteTutor = async (req, res) => {
  try {
    await tutorModel.deleteTutor(req.params.id);
    res.json({ message: "Tutor excluído com sucesso." });
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir tutor." });
  }
};

module.exports = { getAllTutores, getTutor, createTutor, updateTutor, deleteTutor };