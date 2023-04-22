const form = document.getElementById("walidacja-form");
const errorNumeryczne = document.getElementById("error-numeryczne");
const errorTekstowe = document.getElementById("error-tekstowe");

form.addEventListener("submit", (e) => {
    const poleNumeryczne = document.getElementById("pole-numeryczne");
    const poleTekstowe = document.getElementById("pole-tekstowe");
    let isValid = true;

    if (!poleNumeryczne.checkValidity()) {
        errorNumeryczne.hidden = false;
        isValid = false;
    } else {
        errorNumeryczne.hidden = true;
    }

    if (!poleTekstowe.checkValidity()) {
        errorTekstowe.hidden = false;
        isValid = false;
    } else {
        errorTekstowe.hidden = true;
    }

    if (!isValid) {
        e.preventDefault();
    }
});
