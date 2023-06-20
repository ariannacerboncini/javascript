const contatore = document.getElementById("contatore");
const btnAumenta = document.getElementById("aumenta");
const btnAzzera = document.getElementById("azzera");
const btnDiminuisci = document.getElementById("diminuisci");

let valoreContatore = 0; // let si usa per dichiarare variabili numeriche e stringhe

// aumenta di 1 il contatore
btnAumenta.addEventListener("click", function() {
    valoreContatore++;
    contatore.textContent = valoreContatore;
    updateBackgroundImage(valoreContatore);
});

// azzera il contatore
btnAzzera.addEventListener("click", function() {
    valoreContatore = 0;
    contatore.textContent = valoreContatore;
    updateBackgroundImage(valoreContatore);
});

// diminuisce di 1 il contatore se non è già 0
btnDiminuisci.addEventListener("click", function() {
    if (valoreContatore > 0) {
    valoreContatore--;
    contatore.textContent = valoreContatore;
    updateBackgroundImage(valoreContatore);
    }
});

function updateBackgroundImage(valoreContatore) {
    const content = document.getElementById("content");
    if (valoreContatore == 69) {
        content.classList.add("background-image");
    } else {
        content.classList.remove("background-image");
    }
}

