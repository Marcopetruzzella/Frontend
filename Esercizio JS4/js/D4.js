/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/



function area(x, y) {
    let molt = x * y;
    //console.log(sum)
    return molt;
}

let calcolo = area(10,20);
console.log(calcolo);


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazysum (x, y){
    if(x === y){return  (x+y)*3} else{ return x+y}} 

 
 let calcolo2 =crazysum(10,10)
 console.log(calcolo2)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/


function crazydiff (x) {
if (x > (19)){return (x-19)*3} else{x-19};


}
let calcolo3 =crazydiff (20)
console.log(calcolo3)



/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary (n){
 if(n >= 20 &&  n <=100 ){ return (true) } 
 else if (n === 400){return (true)}
 else {return (false)}
 



}
let calcolo4 = boundary(400);
console.log (calcolo4);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/


function epify (S){ if (S === "Epicode"){return S;}
else{ return "Epicode" + S }
}
let Epicode = epify(" ciao a tutti")
console.log(Epicode)



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7 (npos){if(npos < 0){ return "il numero non è positivo "}
 else if  (npos % 3 === 0 || npos % 7 === 0){ return " il numero " + npos +" è multiplo di 3 o di 7"}
 else {  return "il numero fornito non è multiplo di 3 o 7"}
}



let testiamo = check3and7(8);
console.log(testiamo)


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString (ret){ return (ret.slice(5,4,3,2,1))}
let stringa2 = reverseString("Epicode");
console.log(stringa2)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
