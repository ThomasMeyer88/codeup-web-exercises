(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function getArea(radius){

            // hint: area = pi * radius^2
            var pi = 3.14;
            return pi * (radius * radius);


        },

        logInfo: function doRounding(rounding) {


            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (rounding === true) {
                var roundArea = Math.round(circle.getArea(circle.radius));
                console.log("Area of a circle with radius: " + this.radius + ", is: " + roundArea);
            } else {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.getArea(circle.radius));
            }
        }
    };


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");


    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
