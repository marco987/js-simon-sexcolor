// Il software deve chiedere all’utente
// il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire "Ciao <nome>",
// il colore del nome deve essere azzurro o rosa
// a seconda del sesso inserito

var nome, id, sesso, scelta;

nome = prompt("Scrivi il tuo nome");

id = document.getElementById('sexcolor');

sesso = false;

while (sesso == false) {
  scelta = prompt("Dichiara il tuo sesso: 'm' o 'f'?");
  if (scelta == "m") {
    id.style.color = "blue";
    sesso = true;
  } else if (scelta == "f") {
    id.style.color = "pink";
    sesso = true;
  }
}

id.innerHTML = "Ciao " + nome;
