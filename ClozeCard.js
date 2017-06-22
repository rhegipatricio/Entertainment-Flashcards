//links this to runapp
var runapp = require('./runapp.js');

//npm inquirer
var inquirer = require("inquirer");

//var questions
var questionOne = new runapp.clozecard("blue french horn", "... is what Ted gave to Robin after their first date.", "blue french horn is what Ted gave to Robin after their first date.");
var questionTwo = new runapp.clozecard("three times", "Sheldon knocks ... when he goes to Penny's apartment", "Sheldon knocks three times when he goes to Penny's apartment");
var questionThree = new runapp.clozecard("", " ... ", "");
var questionFour = new runapp.clozecard("", " ... ", "");
var questionFive = new runapp.clozecard("", " ... ", "");

//pulls from inquirer to show questions to user
inquirer.prompt([{
	type: 'input',
	name: 'answerOne',
	message: questionOne.missingText
}, {
	type: 'input',
	name: 'answerTwo',
	message: questionTwo.missingText
}, {
	type: 'input',
	name: 'answerThree',
	message: questionThree.missingText
}, {
	type: 'input',
	name: 'answerFour',
	message: questionFour.missingText
}, {
	type: 'input',
	name: 'answerFive',
	message: questionFive.missingText
}

//function that tells the user if they're right or wrong
]).then(function (inquirer) {

	if (inquirer.answerOne === questionOne.clozeGone) {
		console.log("Correct! The complete sentence was " + "'" + questionOne.fullStatement + "'")
	} else {
		console.log("Wrong. The correct statement is " + questionOne.clozeGone)
	}
	if (inquirer.answerTwo === questionTwo.clozeGone) {
		console.log("Correct! The complete sentence was " + "'" + questionTwo.fullStatement + "'")
	} else {
		console.log("Wrong. The correct statement is " + questionTwo.clozeGone)
	}


});