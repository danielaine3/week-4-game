//This will be the goal number that is determined randomly
var goalNumber = [];

// Create variables for counters
var winCounter = 0;
var lossCounter = 0;

//Create varibal for Total Score
var totalScore = 0;

//These make the
var gemOne = $("<img>");
var gemTwo = $("<img>");
var gemThree = $("<img>");
var gemFour = $("<img>");


//Functions
//Random number generator
function getRandom(min, max) {
	return Math.floor(Math.random()*(max - min) + min);
}

//win function
function win() {
	alert("You win!");
	winCounter++;
	$("#wins").text(winCounter);
	startGame();

};

//lose function
function lose() {
	alert("You lose!");
	lossCounter++;
	$("#losses").text(lossCounter);
	startGame();

};

//startGame() function tells the computer how to start/restart the game
function startGame() {

	//resets totalScore at beginning of game
	totalScore= 0;

	//GoalNumber is chosen
	goalNumber = getRandom (19,120);

	//print number in console for testing
	console.log(goalNumber)

	//Print the goalNumber at the beginning of each round in the HTML
	$("#goalnumber").text(goalNumber);

	//give gems a value attribute
	$("#pinkgem").attr("data-value", getRandom(1,12));
	$("#greengem").attr("data-value", getRandom(1,12));
	$("#orangegem").attr("data-value", getRandom(1,12));
	$("#bluegem").attr("data-value", getRandom(1,12));

	//add the value attribute to the gems HTML
	$("#pinkgem").append(gemOne);
	$("#greengem").append(gemTwo);
	$("#orangegem").append(gemThree);
	$("#bluegem").append(gemFour);

};

function checkScore(){

	//If user's count equals goalNumber
	if (totalScore === goalNumber) {

		win();
	}

	//If user's count is larger than goalNumber
	else if (totalScore >= goalNumber) {

		lose();
	}

};

//Start game by running startGame() function
startGame();

//set gems to be clicked 
$(".crystal").on("click", function() {

	//pulls the value attribut and turns it into an integer
	var gemValue = parseInt($(this).attr("data-value"));

	//Print value in console for testing
	console.log(gemValue);

	//Each click adds crystal value to totalScore
	totalScore += gemValue

	//update totalScore value
	$('#total-count').text(totalScore);

checkScore();

});


