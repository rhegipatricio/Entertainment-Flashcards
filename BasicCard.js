var inquirer = require("inquirer");

//shows the front and the back of the card
var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
};

//questions
var questionOne = new BasicCard(
	"Who is the Logo of the NBA?", "Jerry West");

var questionTwo = new BasicCard(
	"What team did Michael Jordan and the Chicago Bulls beat in Jordan's last ever NBA Finals?", "Utah Jazz");

var questionThree = new BasicCard(
	"What year did Kobe Bryant get drafted?", "1996");

var questionFour = new BasicCard(
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
		console.log('The iron is unkind. No good!')
	}
	if (inquirer.answerTwo === questionTwo.back) {
		console.log('The Bulls have won!')
	} else {
		console.log('Airball!')
	}
	if (inquirer.answerThree === questionThree.back) {
		console.log('Kobe with the win!')
	} else {
		console.log('Kobe has shot an airball!')
	}
	if (inquirer.answerFour === questionFour.back) {
		console.log('Iverson for the win!')
	} else {
		console.log('A.I. with the turnover. The Sixers lose!')
	}

});