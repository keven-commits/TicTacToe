const express = require('express');
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 3030;

app.use(cors());

const uploadDirectory = path.join(__dirname, "UPLOAD");

if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory);
}
app.use("/UPLOAD", express.static(uploadDirectory))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDirectory);
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

app.get(/^\/dir\/(.*)/, (req, res) => {
    const p = req.params[0];
    console.log("Requested path : ", p);

    const files = listEntry(p)

    res.send(files);
})

function listEntry(base) {
    try {
        const files = fs.readdirSync(base);
        console.log("Files and directories in the path");
        files.forEach((file) => {
            console.log(file);
        });
        return files;
    } catch (err) {
        console.error("Error readind directory : ", err)
    }
}

app.listen(port, () => {
    console.log(`Server Listening on http://localhost:${port}`);
})





