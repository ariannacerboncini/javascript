const input = document.getElementById("input");
const btnAggiungi = document.getElementById("aggiungi");
const lista = document.getElementById("lista");

btnAggiungi.addEventListener("click", function() {
    const elemento = document.createElement("li");
    elemento.textContent = input.value;
    lista.appendChild(elemento);
    input.value = "";
});