const btn = document.getElementById("btn"); // btn è un oggetto HTML element (HTMLButtonElement)
const testo = document.getElementById("testo"); // testo è un oggetto HTML element (HTMLParagraphElement)

btn.addEventListener("click", function() {
  testo.textContent = "sapevate che in termini di"; // textContent è una proprietà dell'oggetto HTML element
});