const express = require("express");
const router = express.Router();
const tutorController = require("../controllers/tutorController");

router.get("/", tutorController.getAllTutors);       
router.get("/:id", tutorController.getTutor);      
router.post("/", tutorController.createTutor);     
router.put("/:id", tutorController.updateTutor);   
router.delete("/:id", tutorController.deleteTutor); 

module.exports = router;