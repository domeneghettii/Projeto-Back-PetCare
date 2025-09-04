require("dotenv").config();
const express = require("express");
const cors = require("cors");
const petRoutes = require("./src/routes/petRoutes");
const tutorRoutes = require("./src/routes/tutorRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/pets", petRoutes);
app.use("/api/tutors", tutorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
