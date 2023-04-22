function czyPalindrom(slowo) {
    const dlugosc = slowo.length;
    for (let i = 0; i < Math.floor(dlugosc / 2); i++) {
        if (slowo[i] !== slowo[dlugosc - i - 1]) {
            return false;
        }
    }
    return true;
}

const slowo = "kajak";
console.log(slowo, "to palindrom?", czyPalindrom(slowo));
