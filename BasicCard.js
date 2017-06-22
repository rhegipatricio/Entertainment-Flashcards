var inquirer = require("inquirer");

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
}

]).then(function(inquirer) {
	if (inquirer.answerOne === questionOne.back) {
		console.log('Right!')
	} else {
		console.log('Nope!')
	}
	if (inquirer.answerTwo === questionTwo.back) {
		console.log('Right!')
	} else {
		console.log('Nope!')
	}
	if (inquirer.answerThree === questionThree.back) {
		console.log('Right!')
	} else {
		console.log('Nope!')
	}

});