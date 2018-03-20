"use strict";

var oddNumber;

for(var l = 0; l < 1000; l++){
    oddNumber = prompt("Please enter an odd number!");
    if(oddNumber % 2 > 0){
        break;
    }
}

console.log("Number to skip is " + oddNumber);

for(var i = 1; i < 50; i+=2){
   if(i == oddNumber){
       console.log("Oh no! Skipping " + oddNumber);
       continue;
   }

    console.log("Here is odd number " + i);
}
