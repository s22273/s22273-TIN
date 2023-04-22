function najdluzszeSlowo(tekst) {
    const slowa = tekst.split(" ");
    let najdluzsze = "";
    for (const slowo of slowa) {
        if (slowo.length > najdluzsze.length) {
            najdluzsze = slowo;
        }
    }
    return najdluzsze;
}

const tekst = "Kot biegnie szybciej niż mysz";
console.log("Najdłuższe słowo w tekście:", najdluzszeSlowo(tekst));
