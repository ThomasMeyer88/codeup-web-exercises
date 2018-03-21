

(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var length = planetsArray.length;
    var newPlanetString = '';

    for(var i = 0; i < length; i++){
        newPlanetString = newPlanetString + planetsArray[i] + "<br>";

    }
    console.log(newPlanetString);

    newPlanetString = '';

    for(var a = 0; a < length; a++){
        newPlanetString = newPlanetString + "<li>" + planetsArray[a] + "</li>";
    }

    var orderPlanetString = "<ul>" + newPlanetString + "</ul>";



    console.log(orderPlanetString);

    // the below function converts a string to an undordered list
    // function stringUnOrderedList(stringname){
    //     var orderstring = "<ul>" + stringname;
    //     orderstring = orderstring + "</ul>";
    //     return orderstring;
    //
    // }
    //
    // console.log(stringUnOrderedList(newPlanetString));

})();
