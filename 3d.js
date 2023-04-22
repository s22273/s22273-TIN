function drugaNajmniejszaINajwieksza(tablica) {
    const posortowana = Array.from(new Set(tablica)).sort((a, b) => a - b);
    return {
        druga_najmniejsza: posortowana[1],
        druga_najwieksza: posortowana[posortowana.length - 2],
    };
}

const liczby = [2, 7, 3, 10, 3, 6, 1, 8];
console.log("Druga najmniejsza i druga największa liczba w tablicy:", drugaNajmniejszaINajwieksza(liczby));
