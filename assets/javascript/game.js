//This will be the goal number that is determined randomly
var goalNumber = [];

// Create variables for counters
var winCounter = 0;
var lossCounter = 0;

//Create variable for Total Score
var totalScore = 0;

//These make the gems objects
var gemOne = $("<img>");
var gemTwo = $("<img>");
var gemThree = $("<img>");
var gemFour = $("<img>");

//Create variable for sounds
var womp = new Audio ("assets/sounds/womp.mp3")
var tada = new Audio ("assets/sounds/tada.wav")
var click = new Audio ("assets/sounds/click.wav")

//Functions
//Random number generator
function getRandom(min, max) {
	return Math.floor(Math.random()*(max - min) + min);
}

//win function
function win() {
	tada.play();
	winCounter++;
	$("#wins").text(winCounter);
	startGame();

};

//lose function
function lose() {
	womp.play();
	lossCounter++;
	$("#losses").text(lossCounter);
	startGame();

};

//setup time out
//setTimout(startGame, 1000 * 2);

//startGame() function tells the computer how to start/restart the game
function startGame() {

	//Reset totalScore to zero at beginning of each round
	totalScore = 0;

	//Print totalScore at the beginning of each round
	$("#total-count").text(totalScore);

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

	//play sound
	click.play();

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


