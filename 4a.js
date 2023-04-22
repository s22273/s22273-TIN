function konwertujTemperaturę(temp, skala) {
    if (skala === 'C') {
        return (temp * 9 / 5) + 32;
    } else {
        return (temp - 32) * 5 / 9;
    }
}

const form = document.getElementById("konwerter-form");
const wynik = document.getElementById("wynik");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const temperatura = parseFloat(document.getElementById("temperatura").value);
    const skala = document.getElementById("skala").value;
    const konwertowana = konwertujTemperaturę(temperatura, skala);
    wynik.textContent = `Wynik konwersji: ${konwertowana.toFixed(2)}°${skala === 'C' ? 'F' : 'C'}`;
});
