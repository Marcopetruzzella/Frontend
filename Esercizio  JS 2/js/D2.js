/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n1 = 10
let n2 = 5
console.log(n1)
console.log(n2)
if(n1 > n2){ console.log("il numero A è maggiore del numero B");}

else if (n1 == n2){console.log(" i 2 numeri sono uguali");}
else{ console.log("il numero B è maggiore del numero A");}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let numint = 5
if(numint != 5){console.log("il numero è diverso da 5");}
else{console.log("il numero è uguale a 5");}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n4 = 9
if(n4 % 5 == 0){console.log("Perfettamente divisibile per 0");}
else{console.log("non perfettamente divisibili per 5 perchè c'è il resto di " + n4 % 5);}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/




/* SCRIVI QUI LA TUA RISPOSTA */
let n5 = 16
let n6 = 8

if(n5 == 8 || n6 == 8){console.log("uno dei due numeri è uguale ad 8")}
else if (n5 + n6 == 8|| n5 - n6 == 8){console.log("la somma è uguale ad 8")}

else{console.log("Uno dei due numeri non è uguale ad 8")}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 20
if(totalShoppingCart > 50){console.log("hai diritto alla spedizione gratuita ")}
else { console.log("hai una spesa complessiva di " +  (totalShoppingCart + 10))} 


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
totaldiscount = totalShoppingCart / 100 * 20
console.log(totaldiscount)

if(totalShoppingCart > 50) {console.log("hai diritto alla spedizione gratuita e lo sconto del 20% per un totale di  " + (totalShoppingCart - totaldiscount - 10 )) ;}
else{console.log("hai diritto allo sconto del 20% sul totale " + (totalShoppingCart - totaldiscount))}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let numero1 = 10
let numero2 = 15
let numero3 = 20





/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let valore = "ciao"
console.log(typeof valore)


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/



/* SCRIVI QUI LA TUA RISPOSTA */
let valorefornito = 2
if((valorefornito % 2) == 1){console.log("il numero è dispari")}
else{console.log("il numero è pari")}

/* ESERCIZIO 10 
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
if (val < 10) {
    console.log("Meno di 10");
  } else if (val > 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: "toronto"
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
/* DA RIVEDERE*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let numbers = []



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let spesa = ["pane", "pasta", "carne"]
let endVal = spesa.pop(); 
console.log(spesa)