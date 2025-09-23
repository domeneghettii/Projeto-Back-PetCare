const express = require("express");
const router = express.Router();
const upload = require("../config/upload");           // Importa o multer configurado
const petController = require("../controllers/petController");  // Importa o controller

// Rotas pets
router.get("/", petController.getAllPets);             // Listar todos os pets
router.get("/:id", petController.getPet);              // Buscar pet por id
router.post("/", upload.single("foto"), petController.createPet);  // Criar pet com upload de foto
router.put("/:id", upload.single("foto"), petController.updatePet); // Atualizar pet com upload de foto
router.delete("/:id", petController.deletePet);        // Deletar pet

module.exports = router;
