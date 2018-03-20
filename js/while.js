"use strict";

var whileNum = 2;

do {
    console.log(whileNum);
    whileNum = whileNum*2;
} while(whileNum <= 65536);

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5


do{
    var sellCones = Math.floor(Math.random() * 5) + 1;
    switch(sellCones <= allCones) {
       case true:
           console.log("Yay I sold " + sellCones + "!");
           allCones = allCones - sellCones;
           break;
       default:
           console.log("I can't sell you " + sellCones + " because I have only " + allCones + " left.");
           break;
   }
} while(allCones > 0);

console.log("I sold all of my cones, time to go!");

