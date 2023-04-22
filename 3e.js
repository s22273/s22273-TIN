function Student(imie, nazwisko, nrIndeksu, oceny) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.nrIndeksu = nrIndeksu;
    this.oceny = oceny;

    this.wypisz = function () {
        const srednia = this.oceny.reduce((a, b) => a + b) / this.oceny.length;
        console.log(
            "Imię:", this.imie,
            "Nazwisko:", this.nazwisko,
            "Średnia ocen:", srednia.toFixed(2)
        );
    };
}

const student = new Student("Jan", "Kowalski", "12345", [4, 4.5, 5, 3.5, 4.5]);
student.wypisz();
