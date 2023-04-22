const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res) => {
    fs.readFile("public/form.html", (err, data) => {
        if (err) {
            res.status(500).send("Błąd odczytu pliku formularza");
        } else {
            res.setHeader("Content-Type", "text/html");
            res.send(data);
        }
    });
});

module.exports = router;
