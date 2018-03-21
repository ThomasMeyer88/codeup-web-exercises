"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */


var userNumber = parseInt(prompt("Please enter a number!"));

if(userNumber == undefined){
    userNumber = parseInt(prompt("An odd number please!"));
} else if (userNumber %2 == 0 && userNumber >= 0) {
   alert(userNumber + " is an even number");
   alert(userNumber + " is a positive number");
   var addEven = userNumber + 100;
   alert(userNumber + " + 100 = " + addEven);
} else if(userNumber %2 == 0 && userNumber < 0){
   alert(userNumber + " is an even number");
   alert(userNumber + " is a negative number");
   var addENeg = userNumber + 100;
   alert(userNumber + " + 100 = " + addENeg);
} else if(userNumber %2 > 0 && userNumber > 0){
    alert(userNumber + " is an odd number");
    alert(userNumber + " is a positive number");
    var addOdd = userNumber + 100;
    alert(userNumber + " + 100 = "+ addOdd);
} else {
    alert(userNumber + " is an odd number");
    alert(userNumber + " is a negative number");
    var addNOdd = userNumber + 100;
    alert(userNumber + " + 100 = " + addNOdd);
}

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

function analyzeColor(colorID){
    if(colorID === "blue"){
        return (colorID + " is the color of the sky");
    } else if(colorID === "red"){
        return ("Strawberries are " + colorID);
    } else if(colorID === "cyan"){
        return (colorID + " rhymes with Siam");
    } else{
        return ("I don't know that color!");
    }
}

var randomColor = colors[Math.floor(Math.random() * colors.length)];
//console.log(randomColor);
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

//anaylzeColor(randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// switch(randomColor){
//     case "blue":
//         alert("The sky is rather " + randomColor);
//         break;
//     case "red":
//         alert("Strawberries are " + randomColor);
//         break;
//     case "cyan":
//         alert(randomColor + " is very nice");
//         break;
//     case "violet":
//         alert(randomColor + " also doubles as a name");
//         break;
//     case "purple":
//         alert("Beware the " + randomColor + "-peaple eaters");
//         break;
//     default:
//         alert("I don't know anything about " + randomColor);
//         break;
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var colorChoice = prompt("Please choose a color: red blue cyan");

alert(analyzeColor(colorChoice));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function getLucky(luckyNumber, totalCost){
    var discount;
    var discountCost;
    switch(luckyNumber){
        case '1':
            discount = 0.1;
            break;
        case '2':
            discount = 0.25;
            break;
        case '3':
            discount = 0.35;
            break;
        case '4':
            discount = 0.5;
            break;
        case '5':
            discount = 1;
            break;
        default:
            discount = 0;
            break;
    }
    discountCost = (totalCost) - (totalCost * discount);
    var savings = totalCost - discountCost;
    alert("Wow, the final cost is now " + discountCost+ "! You saved " + savings + "!");
}

var userLuckyNumber = prompt("Enter a lucky number from 0-5");
var userPrice = prompt("And how much do the goods cost?");

getLucky(userLuckyNumber, userPrice);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var randomLuckyNumber = Math.floor(Math.random() * 6);

alert("Let's try again with a random lucky number!");

alert("Your random number is " +randomLuckyNumber);


userPrice = prompt("How much is your bill?");


getLucky(randomLuckyNumber.toString(), userPrice);
