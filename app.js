console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 1; i < 100; i++)  {


    if (i % 2 != 0 ){
        console.log(i);
    }
   
    }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i = 1; i <=100; i++) {

    if (i % 3 == 0 && i % 5 != 0){
        console.log(`FIZZ`);
        }
    if (i % 5 == 0 && i %3 !=0) {

        console.log(`BUZZ`);
    }
    if (i % 3 == 0 && i % 5 == 0) {

        console.log(`FIZZBUZZ`);
    }
     if ( i % 3 != 0 && i % 5 != 0) {   
    console.log(i);
     }

    }

    //Exercise 3
    console.log("EXERCISE 3:\n==========\n");
    let x = 0
    while(x <= 100){
        if(x%2!=0){
            console.log(x)
        }
        x+=1
    }

   // Exercise 3 FIZZBUZZ
   console.log("EXERCISE 3:\n==========\n");

   let z = 0

   while(z <= 100){
    if (z % 3 == 0 && z % 5 != 0){
        console.log(`FIZZ`);
        }
    if (z % 5 == 0 && z %3 !=0) {

        console.log(`BUZZ`);
    }
    if (z % 3 == 0 && z % 5 == 0) {

        console.log(`FIZZBUZZ`);
    }
     if ( z % 3 != 0 && z % 5 != 0) {   
    console.log(z);
     }

    z+=1
    
   }
    // Exercise 3 Do/While
   console.log("EXERCISE 3:\n==========\n");

   let y = 0
   do{
        if(y % 2 != 0){ 
        console.log(y)
        }
        y+=1
   } while(y <=100)

     // Exercise 3 FIZZBUZZ  Do/While
   console.log("EXERCISE 3:\n==========\n");
let w = 0
do{
     if(w % 3 == 0 && w % 5 != 0){
        console.log(`FIZZ`);
        }
    if (w % 5 == 0 && w %3 !=0) {

        console.log(`BUZZ`);
    }
    if (w % 3 == 0 && w % 5 == 0) {

        console.log(`FIZZBUZZ`);
    }
     if ( w % 3 != 0 && w % 5 != 0) {   
    console.log(w);
     }
     w+=1
   
} while(w<=100)

    //Exercise 4
    console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let found;
for(let i = 0; i <=n; i++){
    if(i === value) {
        console.log(`found value! Value was ${value}, checked up to n = ${n}`);
        found = true;
        break;
    }
    }
    if (!found) {
        console.log(`did not found value. Value was ${value}, checked up to n = ${n}`);
    }



   //Exercise 5 
   console.log("EXERCISE 5:\n==========\n");

   let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
   let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
   let s = Math.round(Math.random() * (1000 - 1) + 1);
   let start = Math.round(Math.random() * (10 - 1) + 1);
   
   for(let i = start ; i<=s; i++){
    if(i % fizzDivisor == 0 && i % buzzDivisor !=0 ){
        console.log("Fizz")
    }
    if(i % buzzDivisor == 0 && i % fizzDivisor !=0){
        console.log('BUZZ')
    }
    if( i % fizzDivisor == 0 && i % buzzDivisor ==0){
        console.log('FIZZBUZZ')
    }
    if(i % fizzDivisor !=0 && i % buzzDivisor !=0){
        console.log(i)
    }
   }
    








