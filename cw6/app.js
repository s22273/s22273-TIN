const express = require("express");
const bodyParser = require("body-parser");
const helloRoute = require("./routes/hello");
const formRoute = require("./routes/form");
const formDataRoute = require("./routes/formdata");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/hello", helloRoute);
app.use("/form", formRoute);
app.use("/formdata", formDataRoute);

app.get("*", (req, res) => {
    res.send("404 - Nie znaleziono strony");
});

app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`);
});
