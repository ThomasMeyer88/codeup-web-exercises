"use strict";

var mineChance;
var adjMine;
var totalMines;
var safeGrid;
var lostGame;
var newGameLoop;
var timer;
var winStreak = 0;
var highClear = 0;





function startGame(){
    clearInterval(newGameLoop);
    adjMine = 0;
    totalMines = 0;
    safeGrid = 25;
    lostGame = false;
    console.log("game start");
    document.getElementById('totalMines').innerText = "There are " + totalMines + " mines in this round";
    document.getElementById('safeGrid').innerText = "There are " + safeGrid + " safe clicks left";
    document.getElementById('winStreak').innerText = "Currently on a " + winStreak + " game win streak";
    document.getElementById('mostCleared').innerText = "Most mines cleared is " + highClear + "!";
    setBomb();
}


//showMines is called when a grid with a value of mine is clicked and then calls setMinesRed which sets
//the background round and activates the appropriate bomb image
function showMines(){
    for(var gridRow = 1; gridRow < 6; gridRow++){
        for(var gridCol = 1; gridCol < 6; gridCol++){
            setMinesRed(gridRow,gridCol);
        }
    }

    var showDelay = 5000;
    var resetGame = setTimeout(function(){
        startGame();
    }, showDelay);
}

function setMinesRed(row, column){
    if(document.getElementById(row + '-' + column).value == "mine"){
        document.getElementById(row + '-' + column).style.backgroundColor = "red";
        document.getElementById(row + '-' + column).style.backgroundImage = "url('img/bomb.svg')";
        var bombID = "0-" + row + '-' + column;

        console.log(bombID);
        }


}



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


function callGrid(row, column){

    document.getElementById(row + '-' + column).style.backgroundColor = "blue";
    document.getElementById(row + '-' + column).style.backgroundImage= "none";
    document.getElementById(row + '-' + column).value = 0;
    document.getElementById(row + '-' + column).innerText = '';
}

function setMineGrid(row, column){
    mineChance = Math.floor(Math.random() * 4) + 1;
    console.log(document.getElementById(row + '-' + column));

    switch(mineChance) {
        case 2:
            //document.getElementById(row + '-' + column).style.backgroundColor = "red";
            document.getElementById(row + '-' + column).value = "mine";
            console.log(document.getElementById(row + '-' + column).value);
            totalMines ++;

            document.getElementById('totalMines').innerText = "There are " + totalMines + " mines in this round";
            }
}

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



function mineCheck(clickedID){
   console.log(clickedID);
   if(document.getElementById(clickedID).value=="mine"){
       document.getElementById(clickedID).style.backgroundColor = "red";
       lostGame = true;
       timer = 1000;
       winStreak = 0;
       newGameLoop = setTimeout(function(){
           alert("Game over!");
            showMines();
       }, timer);

   } else if(safeGrid == 1) {
       winStreak++;
        alert("You won the game!");
        showMines();
        if(totalMines > highClear){
            highClear = totalMines;
        }

   } else if(lostGame == true){
       alert("Please start a new game");
   } else {
            document.getElementById(clickedID).innerText = document.getElementById(clickedID).value
            safeGrid--;
            document.getElementById('safeGrid').innerText = "There are " + safeGrid + " safe clicks left";
   }
}


var clickToStart = document.getElementById('gameStart');
clickToStart.addEventListener('click', startGame);
