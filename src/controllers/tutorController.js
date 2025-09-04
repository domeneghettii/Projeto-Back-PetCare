const tutorModel = require("../models/tutorModel");


const getAllTutors = async (req, res) => {
  try {
    const tutors = await tutorModel.getTutors();
    res.json(tutors);
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
    const { name, phone } = req.body;
    const newTutor = await tutorModel.createTutor({ name, phone });
    res.status(201).json(newTutor);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar tutor." });
  }
};


const updateTutor = async (req, res) => {
  try {
    const { name, phone } = req.body;
    const updatedTutor = await tutorModel.updateTutor(req.params.id, { name, phone });
    if (!updatedTutor) return res.status(404).json({ message: "Tutor não encontrado para atualizar." });
    res.json(updatedTutor);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar tutor." });
  }
};


const deleteTutor = async (req, res) => {
  try {
    const deletedTutor = await tutorModel.deleteTutor(req.params.id);
    if (!deletedTutor) return res.status(404).json({ message: "Tutor não encontrado para excluir." });
    res.json({ message: "Tutor excluído com sucesso.", tutor: deletedTutor });
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir tutor." });
  }
};

module.exports = { getAllTutors, getTutor, createTutor, updateTutor, deleteTutor };