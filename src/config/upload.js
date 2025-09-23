const multer = require("multer");
const path = require("path");

// Pasta onde as imagens serão salvas
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + file.originalname;
        cb(null, uniqueName);
    },
});

// Configuração do multer com filtro de tipo de imagem
const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();
        const allowed = [".jpg", ".jpeg", ".png"];

        if (!allowed.includes(ext)) {
            return cb(new Error("Apenas imagens são permitidas: JPG, JPEG e PNG"));
        }

        cb(null, true);
    }
});

module.exports = upload;
