const express = require('express');
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 3030;

app.use(cors());

const uploadDir = path.join(__dirname, "UPLOAD");

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}
app.use("/UPLOAD", express.static(uploadDir))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });


app.post('/UPLOAD', upload.array("file"), (req, res) => {
    res.json({
        message: "Fichier uploadé avec succès",
        file: req.files,
    });
});

app.listen(port, () => {
    console.log(`Server Listening on http://localhost:${port}`);
})





