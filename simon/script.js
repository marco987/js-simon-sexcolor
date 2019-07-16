// Un alert espone 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire
// un prompt alla volta i numeri
// che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri
// da indovinare sono stati individuati

// Contenitore dei 5 numeri casuali
var numeriRandom = [];
var numeriUtente = [];
var numeriIndovinati = [];

// Genero con un ciclo 5 numeri casuali
// e li metto nell'array numeriRandom
for (var i = 0; i < 5; i++) {
  var generaRandom = Math.floor((Math.random() * 100) +1);
  numeriRandom.push(generaRandom);
}

console.log("Numeri Random " + numeriRandom);
alert("Questi sono numeri casuali, memorizzali! " + numeriRandom);

setTimeout(simon, 30000);

function simon() {
  for (var i = 0; i < 5; i++) {
    var numeroUtente = parseInt(prompt("Inserisci il numero"));
    numeriUtente.push(numeroUtente);
  }

  console.log("Numeri Utente " + numeriUtente);

  var contatore = 0;

  for (var i = 0; i < numeriUtente.length; i++) {
    if (numeriRandom.includes(numeriUtente[i])) {
      numeriIndovinati.push(numeriUtente[i]);
      contatore ++;
    }
  }
  console.log("Numeri Indovinati: " + numeriIndovinati + "(" + contatore + " su 5)");
}
