const input = document.getElementById("input");
const btnAggiungi = document.getElementById("aggiungi");
const lista = document.getElementById("lista");
let elementiLista = []; // le liste in js possono contenere tipi di dato eterogenei

btnAggiungi.addEventListener("click", function() {
    const elemento = input.value.trim();
    if (elemento != "") {
        elementiLista.push(elemento); // push consente di inserire un elemento alla lista
        aggiornaLista();
    }
    input.value = "";
});

function aggiornaLista() {
    lista.innerHTML = "";
    for (let i = 0; i <  elementiLista.length; i++) {
        const elemento = document.createElement("li");
        elemento.textContent = elementiLista[i];
        lista.appendChild(elemento);
    }
}
