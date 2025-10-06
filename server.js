require("dotenv").config();
const express = require("express");
const cors = require("cors");
const tutorRoutes = require("./src/routes/tutorRoutes");
const petRoutes = require("./src/routes/petRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/tutores", tutorRoutes);
app.use("/api/pets", petRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
