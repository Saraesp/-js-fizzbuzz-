// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

//1 - Scrivi in console i numeri da 1 a 100
//2 - Stampa per i multipli di 3 "Fizz"
//3 - Stampa pe ri multipli di 5 "Buzz"
//4 - Stampa per i multipli sia di 3 che di 5 "FizzBuzz"
//5 - Per i numeri che non sono multipli ne di 3 ne di 5 non stampare il numero

for(let i=1; i<=100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    }
    else if(i % 5 == 0){
        console.log("Buzz")
    }
    else if(i % 3 == 0){
        console.log("Fizz")
    }
    else{
        console.log("i")
    }
}