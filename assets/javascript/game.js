//This will be the goal number that is determined randomly
var goalNumber = [];

// Create variables for counters
var winCounter = 0;
var lossCounter = 0;

//Create varibal for Total Score
var totalScore = 0;

var crystal = [];

//These will nold the random numbers generated for the Gems
var gemOne = $("<img>");
var gemTwo = $("<img>");
var gemThree = $("<img>");
var gemFour = $("<img>");

//Functions
//Random number generator
function getRandom(min, max) {
	return Math.floor(Math.random()*(max - min) + min);
}

function addValues(a,b){
	return sum = parseInt 
}
//Add values together


//$('gemOne, totalScore').each(function(){
	//sum += parseFloat($(this).text().substr(1));

//});

$('#total-count').text(totalScore);

//win function
function win() {
	alert("You win!");
	winCounter++;
	$("#wins").text(winCounter);
	startGame();
}

//lose function
function lose() {
	alert("You lose!");
	lossCounter++;
	$("#losses").text(lossCounter);
	startGame();
}


//Subtract gemValue from goalNumber

//startGame() function tells the computer how to start/restart the game
function startGame() {

	//resets totalScore at beginning of game
	$("#total-count").text(totalScore);

	//GoalNumber is chosen
	goalNumber = getRandom (19,120);

	//print number in console for testing
	console.log(goalNumber)

	//Print the goalNumber at the beginning of each round in the HTML
	$("#goalnumber").text(goalNumber);














	//give gems an attribute to hold values
	gemOne.attr("value", getRandom(1,12));
	gemTwo.attr("value", getRandom(1,12));
	gemThree.attr("value", getRandom(1,12));
	gemFour.attr("value", getRandom(1,12));

	$("#pinkgem").append(gemOne);
	$("#greengem").append(gemTwo);
	$("#orangegem").append(gemThree);
	$("#bluegem").append(gemFour);

	//gem numbers are chosen
	$(".crystal").on("click", function(){

		var value = ($(this).attr("value"));
	})
	//gemOne= getRandom (1, 12);
	//gemTwo= getRandom (1,12);
	//gemThree= getRandom (1, 12);
	//gemFour= getRandom (1, 12);

	//Print numbers in console for testing
	//console.log(gemOne);
	//console.log(gemTwo);
	//console.log(gemThree);
	//console.log(gemFour);

};

//Add value of gem on click to total score
$("#pinkGem").on('click', function(){
	addValues(gemOne, totalScore)

	$('#total-count').text(totalScore);


});

//Start game by running startGame() function
startGame();

