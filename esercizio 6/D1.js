/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Su Javascript non serve specificare la tipologia di un'elemento perchè essendo un linguaggio non lo interpreta automaticamente
Ci sono  4 tipi di datatype su JS e sono:
Numerici
stringe
booleani 
empty (null / undefinited)  

per conoscere con certezza la tipologia di una variabile possiamo inserirla nella console nella seguente formula
console.log(typeof nomevariabile)
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let mionome = "Marco"
console.log(mionome)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
 
let somma = 12 + 20;
let A = 12;
let B = 20;
console.log (somma) 
console.log (A + B)

       
       

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

 var x = 12


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

let name = "Petruzzella"
const costante = "ABBA"
console.log(name)
/* const costante ="ACCA"*/
console.log(costante)
/*console.log(ACCA)*/


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* */  console.log( 4 - x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john";
let name2 = "John";
console.log( name1 !== name2)


if (name1.toLowerCase() === name2.toLowerCase()) {
  console.log("Convertento i caratteri in minuscolo I nomi sono uguali.");
} else {
  console.log("I nomi non sono uguali.");
}
/* SCRIVI QUI LA TUA RISPOSTA */
