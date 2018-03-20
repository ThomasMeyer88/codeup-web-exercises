"use strict";

function multiplicationTable(x){
    var x1, x2, x3, x4, x5, x6, x7, x8, x9, x0;
    x1 = x * 1; x2 = x * 2; x3 = x * 3; x4 = x * 4; x5 = x * 5;
    x6 = x * 6; x7 = x * 7; x8 = x * 8; x9 = x * 9; x0 = x * 10;
    console.log(x +" x 1 = " + x1);
    console.log(x +" x 2 = " + x2);
    console.log(x +" x 3 = " + x3);
    console.log(x +" x 4 = " + x4);
    console.log(x +" x 5 = " + x5);
    console.log(x +" x 6 = " + x6);
    console.log(x +" x 7 = " + x7);
    console.log(x +" x 8 = " + x8);
    console.log(x +" x 9 = " + x9);
    console.log(x +" x 10 = " + x0);
}



for (var i = 0; i < 10; i++) {
    var randomNumber = parseInt(Math.random() * (200 - 20) + 20);
    if (randomNumber % 2 == 0) {
        console.log(randomNumber + " is even");
    } else {
        console.log(randomNumber + " is odd");
    }
}

for (var a = 1; a < 10; a++){
    var b = '';
    var d = 1;
    for (var c = a; d <= a; d++){
        b = b + '' + c;


    }
    console.log(b);

}

for (var e = 100; e > 0; e-=5){
    console.log(e);
}