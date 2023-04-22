const silniaRekurencyjna = function licz(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * licz(n - 1);
    }
};

function silniaIteracyjna(n) {
    let wynik = 1;
    for (let i = 1; i <= n; i++) {
        wynik *= i;
    }
    return wynik;
}

const liczba = 5;
console.log("Silnia rekurencyjna z", liczba, ":", silniaRekurencyjna(liczba));
console.log("Silnia iteracyjna z", liczba, ":", silniaIteracyjna(liczba));
