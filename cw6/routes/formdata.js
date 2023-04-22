const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const formData = `
    Imię: ${req.body.name}<br>
    Email: ${req.body.email}<br>
    Wiadomość: ${req.body.message}<br>
  `;
    res.send(formData);
});

module.exports = router;
