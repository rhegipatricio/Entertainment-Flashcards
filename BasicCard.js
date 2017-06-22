var inquirer = require("inquirer");

var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
};

var questionOne = new BasicCard(
		"Who is the Logo of the NBA?", "Jerry West");

var questionTwo = new BasicCard(
		"What team did Michael Jordan and the Chicago Bulls beat in Jordan's last ever NBA Finals?", "Utah Jazz");

inquirer.prompt([{
	type: 'input',
	message: questionOne.front,
	name: 'answerOne'
}, {
	type: 'input',
	message: questionTwo.front,
	name: 'answerTwo'
}])