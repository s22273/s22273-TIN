const http = require("http");
const wiadomosci = require("./wiadomosci.js");

const serwer = http.createServer((req, res) => {
    const url = req.url;

    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write(wiadomosci.witaj());
        res.end();
    } else if (url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write(wiadomosci.oNas());
        res.end();
    } else if (url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write(wiadomosci.kontakt());
        res.end();
    } else if (url === "/products") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write(wiadomosci.produkty());
        res.end();
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write(wiadomosci.nieZnaleziono());
        res.end();
    }
});

serwer.listen(3000, () => {
    console.log("Serwer działa na porcie 3000");
});
