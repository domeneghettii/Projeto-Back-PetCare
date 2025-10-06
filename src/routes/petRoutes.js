const express = require("express");
const router = express.Router();
const upload = require("../config/upload");          
const petController = require("../controllers/petController");  

// Rotas pets
router.get("/", petController.getAllPets);           
router.get("/:id", petController.getPet);            
router.post("/", upload.single("foto"), petController.createPet);  
router.put("/:id", upload.single("foto"), petController.updatePet); 
router.delete("/:id", petController.deletePet);    

module.exports = router;
