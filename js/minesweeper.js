"use strict";

var mineChance;
var adjMine;
var totalMines;
var safeGrid;
var lostGame;
var newGameLoop;
var timer;
var firstClick;

//the following are declared now to avoid resetting them with every game and NaN/null values in displays
var winStreak = 0;
var highClear = 0;
var winCounter = 0;
var lossCounter = 0;
var gameOn = false;
var flagModeOn = false;
var flagCount = 0;
var clickCounter = 0;




//resets variables in order to actaully start the game
function clearGame(){
    clearInterval(newGameLoop);
    gameOn = false;
    adjMine = 0;
    totalMines = 0;
    flagCount = 0;
    safeGrid = 25;
    lostGame = false;
    for(var gridRow = 1; gridRow < 6; gridRow++){
        for(var gridCol = 1; gridCol < 6; gridCol++){
            callGrid(gridRow,gridCol);
        }
    }
}

//if gameOn = false startGame will be called by clicking a tile and calls the setBomb function to
//initialize everthing else
function startGame(){
    gameOn = true;
    adjMine = 0;
    totalMines = 0;
    safeGrid = 25;
    lostGame = false;
    console.log("game start");
    document.getElementById('winLoss').innerText = "Session: Wins - " +winCounter + " Losses - " + lossCounter;
    document.getElementById('totalMines').innerText = "There are " + totalMines + " mines in this round";
    document.getElementById('safeGrid').innerText = "There are " + safeGrid + " safe clicks left";
    document.getElementById('winStreak').innerText = "Currently on a " + winStreak + " game win streak";
    document.getElementById('mostCleared').innerText = "Most mines cleared is " + highClear + "!";
    setBomb();
}


//showMines is called when a grid with a value of mine is clicked and then calls setMinesRed which sets
//the background red and activates the appropriate bomb image
function showMines(){
    for(var gridRow = 1; gridRow < 6; gridRow++){
        for(var gridCol = 1; gridCol < 6; gridCol++){
            setMinesRed(gridRow,gridCol);
        }
    }

    var showDelay = 5000;
    var resetGame = setTimeout(function(){
        clearGame();
    }, showDelay);
}

//this function is called at the end of the game on either a loss or win just to show the user
//location of the mines
function setMinesRed(row, column){
    if(document.getElementById(row + '-' + column).value == "mine"){
        document.getElementById(row + '-' + column).style.backgroundColor = "red";
        document.getElementById(row + '-' + column).style.backgroundImage = "url('img/bomb.svg')";
        var bombID = "0-" + row + '-' + column;

        console.log(bombID);
        }


}


//this function runs through 3 different for loops
//the first loop is for callGrid to clear the field
//second loop is to establish where the mines are located
//third loop is to establish values of non mine tiles based on number of adjacent mines
//each loop has a nested for loop
//the logic is that the loop checks all rows and the nested loop checks each column of the row
function setBomb(){

    for(var gridRow = 1; gridRow < 6; gridRow++){
        for(var gridCol = 1; gridCol < 6; gridCol++){
            callGrid(gridRow,gridCol);
        }
    }
    for(gridRow = 1; gridRow < 6; gridRow++){
        for(gridCol = 1; gridCol < 6; gridCol++){
            setMineGrid(gridRow,gridCol);
        }
    }
    for(gridRow = 1; gridRow < 6; gridRow++){
        for(gridCol = 1; gridCol < 6; gridCol++){
            findMine(gridRow,gridCol);
        }
    }
    safeGrid -= totalMines;
    document.getElementById('safeGrid').innerText = "There are " + safeGrid + " safe clicks left";
}


//this function is called in order to reset the background color and remove images at the start of a new game
function callGrid(row, column){

    document.getElementById(row + '-' + column).style.backgroundColor = "blue";
    document.getElementById(row + '-' + column).style.backgroundImage= "none";
    document.getElementById(row + '-' + column).value = 0;
    document.getElementById(row + '-' + column).innerText = '';
}


//setMineGrid "rolls the dice" to assign the value of mine to tiles
//it can not assign the first clicked tile a value of mine
function setMineGrid(row, column){
    mineChance = Math.floor(Math.random() * 4) + 1;
    console.log(document.getElementById(row + '-' + column));
    var checkFirstClick = row + "-" + column;
    console.log("This is checkFirstClick " + checkFirstClick);
    if(firstClick == checkFirstClick) {
        console.log(firstClick + "can't be a mine");
    } else {
        switch (mineChance) {
            case 2:
                //document.getElementById(row + '-' + column).style.backgroundColor = "red";
                document.getElementById(row + '-' + column).value = "mine";
                console.log(document.getElementById(row + '-' + column).value);
                totalMines++;

                document.getElementById('totalMines').innerText = "There are " + totalMines + " mines in this round";
        }
    }

}


//cascadeAdjacent occurs when a tile with a value of zero is clicked
//it then loops through adjacent tiles and reveals those without mines
function cascadeAdjacent(clickedID) {
    console.log(clickedID[0]);
    var row = clickedID[0];
    var column = clickedID [2];
    console.log(row);
    console.log(column);
    var checkAdjRow;
    var checkAdjCol;
    if (document.getElementById(row + "-" + column).value != "mine"){
        if (row == 1) {
            //checks row 1
            if (column == 1) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 1; checkAdjRow < 3; checkAdjRow++) {
                    for (checkAdjCol = 1; checkAdjCol < 3; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            } else if (column == 2) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 1; checkAdjRow < 3; checkAdjRow++) {
                    for (checkAdjCol = 1; checkAdjCol < 4; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine"){
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            } else if (column == 3) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 1; checkAdjRow < 3; checkAdjRow++) {
                    for (checkAdjCol = 2; checkAdjCol < 5; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            } else if (column == 4) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 1; checkAdjRow < 3; checkAdjRow++) {
                    for (checkAdjCol = 3; checkAdjCol < 6; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            } else if (column == 5) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 1; checkAdjRow < 3; checkAdjRow++) {
                    for (checkAdjCol = 4; checkAdjCol < 6; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            }
        } else if (row == 2) {
            //checks row 1
            if (column == 1) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 1; checkAdjRow < 4; checkAdjRow++) {
                    for (checkAdjCol = 1; checkAdjCol < 3; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            } else if (column == 2) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 1; checkAdjRow < 4; checkAdjRow++) {
                    for (checkAdjCol = 1; checkAdjCol < 4; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            } else if (column == 3) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 1; checkAdjRow < 4; checkAdjRow++) {
                    for (checkAdjCol = 2; checkAdjCol < 5; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            } else if (column == 4) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 1; checkAdjRow < 4; checkAdjRow++) {
                    for (checkAdjCol = 3; checkAdjCol < 6; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            } else if (column == 5) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 1; checkAdjRow < 4; checkAdjRow++) {
                    for (checkAdjCol = 4; checkAdjCol < 6; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }
            }
        } else if (row == 3) {
            //checks row 1
            if (column == 1) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 2; checkAdjRow < 5; checkAdjRow++) {
                    for (checkAdjCol = 1; checkAdjCol < 3; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            } else if (column == 2) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 2; checkAdjRow < 5; checkAdjRow++) {
                    for (checkAdjCol = 1; checkAdjCol < 4; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            } else if (column == 3) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 2; checkAdjRow < 5; checkAdjRow++) {
                    for (checkAdjCol = 2; checkAdjCol < 5; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            } else if (column == 4) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 2; checkAdjRow < 5; checkAdjRow++) {
                    for (checkAdjCol = 3; checkAdjCol < 6; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            } else if (column == 5) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 2; checkAdjRow < 5; checkAdjRow++) {
                    for (checkAdjCol = 4; checkAdjCol < 6; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            }
        } else if (row == 4) {
            //checks row 1
            if (column == 1) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 3; checkAdjRow < 6; checkAdjRow++) {
                    for (checkAdjCol = 1; checkAdjCol < 3; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            } else if (column == 2) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 3; checkAdjRow < 6; checkAdjRow++) {
                    for (checkAdjCol = 1; checkAdjCol < 4; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            } else if (column == 3) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 3; checkAdjRow < 6; checkAdjRow++) {
                    for (checkAdjCol = 2; checkAdjCol < 5; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            } else if (column == 4) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 3; checkAdjRow < 6; checkAdjRow++) {
                    for (checkAdjCol = 3; checkAdjCol < 6; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            } else if (column == 5) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 3; checkAdjRow < 6; checkAdjRow++) {
                    for (checkAdjCol = 4; checkAdjCol < 6; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            }
        } else if (row == 5) {
            //checks row 1
            if (column == 1) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 4; checkAdjRow < 6; checkAdjRow++) {
                    for (checkAdjCol = 1; checkAdjCol < 3; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            } else if (column == 2) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 4; checkAdjRow < 6; checkAdjRow++) {
                    for (checkAdjCol = 1; checkAdjCol < 4; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            } else if (column == 3) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 4; checkAdjRow < 6; checkAdjRow++) {
                    for (checkAdjCol = 2; checkAdjCol < 5; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            } else if (column == 4) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 4; checkAdjRow < 6; checkAdjRow++) {
                    for (checkAdjCol = 3; checkAdjCol < 6; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            } else if (column == 5) {
                console.log("Checking for " + row + " , " + column);
                for (checkAdjRow = 4; checkAdjRow < 6; checkAdjRow++) {
                    for (checkAdjCol = 4; checkAdjCol < 6; checkAdjCol++) {
                        console.log("Checking" + checkAdjCol + " , " + checkAdjRow);
                        if (document.getElementById(checkAdjRow + '-' + checkAdjCol).value != "mine") {
                            document.getElementById(checkAdjRow + '-' + checkAdjCol).innerText = document.getElementById(checkAdjRow + '-' + checkAdjCol).value;
                            ;

                        }
                    }
                }

            }

        }
    }
}


//findMine sets values of all tiles that are not mines based on # of adjacent mines
function findMine(row, column) {
    adjMine = 0;
    var checkRow;
    var checkCol;

    //check for mine logic
    if (document.getElementById(row + "-" + column).value != "mine"){
        if (row == 1) {
            //checks row 1
            if (column == 1) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 1; checkRow < 3; checkRow++) {
                    for (checkCol = 1; checkCol < 3; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            } else if (column == 2) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 1; checkRow < 3; checkRow++) {
                    for (checkCol = 1; checkCol < 4; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            } else if (column == 3) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 1; checkRow < 3; checkRow++) {
                    for (checkCol = 2; checkCol < 5; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            } else if (column == 4) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 1; checkRow < 3; checkRow++) {
                    for (checkCol = 3; checkCol < 6; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            } else if (column == 5) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 1; checkRow < 3; checkRow++) {
                    for (checkCol = 4; checkCol < 6; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            }
            document.getElementById(row + '-' + column).value = adjMine;
            console.log(adjMine);

        } else if (row == 2) {
            //checks row 2
            if (column == 1) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 1; checkRow < 4; checkRow++) {
                    for (checkCol = 1; checkCol < 3; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            } else if (column == 2) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 1; checkRow < 4; checkRow++) {
                    for (checkCol = 1; checkCol < 4; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            } else if (column == 3) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 1; checkRow < 4; checkRow++) {
                    for (checkCol = 2; checkCol < 5; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            } else if (column == 4) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 1; checkRow < 4; checkRow++) {
                    for (checkCol = 3; checkCol < 6; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            } else if (column == 5) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 1; checkRow < 4; checkRow++) {
                    for (checkCol = 4; checkCol < 6; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            }
            //document.getElementById(row + '-' + column).innerText = adjMine;
            document.getElementById(row + '-' + column).value = adjMine;
            console.log(adjMine);

        } else if (row == 3) {
            //checks row 3
            if (column == 1) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 2; checkRow < 5; checkRow++) {
                    for (checkCol = 1; checkCol < 3; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            } else if (column == 2) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 2; checkRow < 5; checkRow++) {
                    for (checkCol = 1; checkCol < 4; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            } else if (column == 3) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 2; checkRow < 5; checkRow++) {
                    for (checkCol = 2; checkCol < 5; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            } else if (column == 4) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 2; checkRow < 5; checkRow++) {
                    for (checkCol = 3; checkCol < 6; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            } else if (column == 5) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 2; checkRow < 5; checkRow++) {
                    for (checkCol = 4; checkCol < 6; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            }
            //document.getElementById(row + '-' + column).innerText = adjMine;

            document.getElementById(row + '-' + column).value = adjMine;
            console.log(adjMine);

        }
        if (row == 4) {
            if (column == 1) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 3; checkRow < 6; checkRow++) {
                    for (checkCol = 1; checkCol < 3; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            } else if (column == 2) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 3; checkRow < 6; checkRow++) {
                    for (checkCol = 1; checkCol < 4; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            } else if (column == 3) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 3; checkRow < 6; checkRow++) {
                    for (checkCol = 2; checkCol < 5; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            } else if (column == 4) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 3; checkRow < 6; checkRow++) {
                    for (checkCol = 3; checkCol < 6; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            } else if (column == 5) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 3; checkRow < 6; checkRow++) {
                    for (checkCol = 4; checkCol < 6; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            }
            //document.getElementById(row + '-' + column).innerText = adjMine;
            document.getElementById(row + '-' + column).value = adjMine;
            console.log(adjMine);

        } else if (row == 5) {
            if (column == 1) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 4; checkRow < 6; checkRow++) {
                    for (checkCol = 1; checkCol < 3; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            } else if (column == 2) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 4; checkRow < 6; checkRow++) {
                    for (checkCol = 1; checkCol < 4; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            } else if (column == 3) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 4; checkRow < 6; checkRow++) {
                    for (checkCol = 2; checkCol < 5; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            } else if (column == 4) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 4; checkRow < 6; checkRow++) {
                    for (checkCol = 3; checkCol < 6; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            } else if (column == 5) {
                console.log("Checking for " + row + " , " + column);
                for (checkRow = 4; checkRow < 6; checkRow++) {
                    for (checkCol = 4; checkCol < 6; checkCol++) {
                        console.log("Checking" + checkRow + " , " + checkCol);
                        switch (document.getElementById(checkRow + '-' + checkCol).value) {
                            case "mine":
                                adjMine++;
                        }
                    }
                }

            }
            //document.getElementById(row + '-' + column).innerText = adjMine;
            document.getElementById(row + '-' + column).value = adjMine;
            console.log(adjMine);

        }


    } else {
        console.log("It is a mine");
    }



}


//mineCheck occurs when one of the tiles is clicked proceeds to for if the tile is a mine, is not a mine, if
//win condition is met etc -- neeed to include a selector mode to flag tiles in here
function mineCheck(clickedID){
   console.log(clickedID);
   clickCounter++;
   if(flagModeOn == false) {
       if (document.getElementById(clickedID).value == "mine") {
           document.getElementById(clickedID).style.backgroundColor = "red";
           lostGame = true;
           timer = 1000;
           winStreak = 0;
           lossCounter++;
           newGameLoop = setTimeout(function () {
               alert("Game over!");
               showMines();
           }, timer);

       } else if (safeGrid == 1) {
           winStreak++;
           alert("You won the game!");
           showMines();
           winCounter++;
           if (totalMines > highClear) {
               highClear = totalMines;
           }

       } else if (lostGame == true) {
           alert("Please start a new game");
       } else if (gameOn == false) {
           firstClick = clickedID;
           //document.getElementById(clickedID).innerText = document.getElementById(clickedID).value;
           console.log(firstClick);
           startGame();
       } else if (document.getElementById(clickedID).value == 0) {
           console.log(clickedID);
           cascadeAdjacent(clickedID);
           safeGrid--;
           document.getElementById('safeGrid').innerText = "There are " + safeGrid + " safe clicks left";
       }
       else {
           document.getElementById(clickedID).innerText = document.getElementById(clickedID).value;
           document.getElementById('safeGrid').innerText = "There are " + safeGrid + " safe clicks left";
           safeGrid--;
       }
   } else if(flagModeOn = true){
        if(clickCounter % 2 == 0) {
            document.getElementById(clickedID).style.backgroundImage = "url('img/bomb.svg')";
            if(document.getElementById(clickedID).value == "mine"){
                flagCount++;
                console.log("Flag Count is " + flagCount);
                if(flagCount == totalMines){
                    alert("You flagged all the mines! You win!")
                    showMines();
                }
            }
        } else {
            if(document.getElementById(clickedID).value == "mine"){
                flagCount--;
            }
            document.getElementById(clickedID).style.backgroundImage = "none";

        }
   }
}


//variable and event to reset game
var clickToStart = document.getElementById('gameStart');
clickToStart.addEventListener('click', clearGame);
var flagMode = document.getElementById('flagIt');
flagMode.addEventListener('click', runFlagMode);

function runFlagMode(){
    if (flagModeOn == true){
        flagModeOn = false;
        console.log("Flags are off");
    } else {
        flagModeOn = true;
        console.log("Flags are on");
    }
}
