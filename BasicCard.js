// links runapp to basiccard.js
var runapp = require('./runapp.js');


//npm inquirer
var inquirer = require("inquirer");

//shows the front and the back of the card
var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
};

//questions
var questionOne = new runapp.basiccard(
	"Who is the Logo of the NBA?", "Jerry West");

var questionTwo = new runapp.basiccard(
	"What team did Michael Jordan and the Chicago Bulls beat in Jordan's last ever NBA Finals?", "Utah Jazz");

var questionThree = new runapp.basiccard(
	"What year did Kobe Bryant get drafted?", "1996");

var questionFour = new runapp.basiccard(
	"Although he was supremely successful in his career, Kobe Bryant did not get drafted first in his draft. What was the nickname of the player that DID get drafted first?", "The Answer");

//pulls from inquirer to show questions to user
inquirer.prompt([{
	type: 'input',
	name: 'answerOne',
	message: questionOne.front
}, {
	type: 'input',
	name: 'answerTwo',
	message: questionTwo.front
}, {
	type: 'input',
	name: 'answerThree',
	message: questionThree.front
}, {
	type: 'input',
	name: 'answerFour',
	message: questionFour.front
}

//function that tells the user if they're right or wrong
]).then(function(inquirer) {
	if (inquirer.answerOne === questionOne.back) {
		console.log("It's Good!")
	} else {
		console.log("The iron is unkind. No good! You'd get the And-1 if you typed JERRY WEST")
	}
	if (inquirer.answerTwo === questionTwo.back) {
		console.log('The Bulls have won!')
	} else {
		console.log("Airball! You'd get the swish if you picked the UTAH JAZZ")
	}
	if (inquirer.answerThree === questionThree.back) {
		console.log('Kobe with the win!')
	} else {
		console.log("Kobe has shot an airball! You let him down. Kobe would have made it if you picked 1996")
	}
	if (inquirer.answerFour === questionFour.back) {
		console.log('Iverson for the win!')
	} else {
		console.log("A.I. with the turnover. The Sixers lose! Philly would have won if you typed in THE ANSWER")
	}

});