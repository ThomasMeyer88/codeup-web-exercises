var color;
var simonOrder = [];
var turnCount = 0;
var checkOrder = [];
var checkCount;
var roundOn = 0;
var lightDelay;
var heatingUpHeight;
var heatingUpIncrease = 40;
var baseMargin;

function startTheGame(){
    heatingUpHeight = 0;
    lightDelay = 1250;
    baseMargin = 400;
    document.getElementById('startGame').style.display = "none";

    if(roundOn == 1){
        console.log("I can't start a game when the round is going!");
    } else {
        simonOrder = [];
        newRound();
    }
}

function randomColor(){
    document.getElementById('0').style.backgroundColor = "red";
    document.getElementById('1').style.backgroundColor = "blue";
    document.getElementById('2').style.backgroundColor = "green";
    document.getElementById('3').style.backgroundColor = "blueviolet";

    var lightup = counter -1;
    console.log(simonOrder[lightup] + " is lighting up!");
    var lightPause = setTimeout(function() {
        switch (simonOrder[lightup]) {
            case 0:
                document.getElementById('0').style.backgroundColor = "hotpink";
                console.log(color);
                break;
            case 1:
                document.getElementById('1').style.backgroundColor = "lightblue";
                console.log(color);
                break;
            case 2:
                document.getElementById('2').style.backgroundColor = 'lightgreen';
                console.log(color);
                break;
            case 3:
                document.getElementById('3').style.backgroundColor = 'violet';
                console.log(color);
        }
    }, 500);
}

function colorCheck(clickedID){
    var checkTheColor = parseInt(clickedID);
    switch(checkTheColor){
        case 0:
            document.getElementById('0').style.backgroundColor = "hotpink";

            break;
        case 1:
            document.getElementById('1').style.backgroundColor = "lightblue";

            break;
        case 2:
            document.getElementById('2').style.backgroundColor = 'lightgreen';


            break;
        case 3:
            document.getElementById('3').style.backgroundColor = 'violet';


    }
    checkOrder.push(clickedID);
    console.log(checkOrder[checkCount]);
    console.log(clickedID);

    if(checkOrder[checkCount] != simonOrder[checkCount]){
        roundOn = 0;
        document.getElementById('startGame').style.display = "block";
        console.log("failure");
    } else {
        checkCount++;
        if (checkOrder.length == simonOrder.length){
            console.log("round complete");
            heatingUpHeight = heatingUpHeight + heatingUpIncrease;
            baseMargin = baseMargin - heatingUpIncrease;
            document.getElementById('heatingUp').style.height = heatingUpHeight + "px";
            document.getElementById('heatingUp').style.marginTop = baseMargin + "px";

            turnCount++;
            newRound();
        }
    }

    var colorWipe = setTimeout(function() {
        document.getElementById('0').style.backgroundColor = "red";
        document.getElementById('1').style.backgroundColor = "blue";
        document.getElementById('2').style.backgroundColor = "green";
        document.getElementById('3').style.backgroundColor = "blueviolet";
    },500);


}



var counter = 0;

function newRound() {
    checkCount = 0;
    roundOn = 1;
    console.log("new round");
    counter = 0;
    checkOrder = [];
    color = parseInt(Math.random()*4);
    simonOrder.push(color);
    console.log(simonOrder);





    var intervalId = setInterval(function () {
        if (counter > turnCount) {
            document.getElementById('0').style.backgroundColor = "red";
            document.getElementById('1').style.backgroundColor = "blue";
            document.getElementById('2').style.backgroundColor = "green";
            document.getElementById('3').style.backgroundColor = "blueviolet";
            clearInterval(intervalId);
            console.log('All done');
        } else {
            document.getElementById('0').style.backgroundColor = "red";
            document.getElementById('1').style.backgroundColor = "blue";
            document.getElementById('2').style.backgroundColor = "green";
            document.getElementById('3').style.backgroundColor = "blueviolet";
            counter++;
            randomColor();
        }
    }, lightDelay);
    lightDelay*=.95;
    console.log("Delay is at " + lightDelay);
}

var clickToStart = document.getElementById('startGame');

clickToStart.addEventListener('click', startTheGame);
