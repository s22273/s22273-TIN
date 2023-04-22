const dodajAkapitBtn = document.getElementById("dodaj-akapit");
const akapity = document.getElementById("akapity");

dodajAkapitBtn.addEventListener("click", () => {
    const tekst = document.getElementById("tekst").value;
    const nowyAkapit = document.createElement("p");
    nowyAkapit.textContent = tekst;
    akapity.appendChild(nowyAkapit);
});
