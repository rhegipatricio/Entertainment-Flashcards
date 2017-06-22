//links this to runapp
var runapp = require('./runapp.js');

//npm inquirer
var inquirer = require("inquirer");

//var questions
var questionOne = new runapp.clozecard("knocks", "I am the one who ...!", "I am the one who knocks!");
var questionTwo = new runapp.clozecard("three times", "Sheldon knocks ... when he goes to Penny's apartment", "Sheldon knocks three times when he goes to Penny's apartment");
var questionThree = new runapp.clozecard("legendary", "Barney Stinson is famous for saying 'this is going to be ... '", "Barney Stinson is famous for saying 'this is going to be legendary'");
var questionFour = new runapp.clozecard("The Rock", " ... is the stage and wrestling name for Dwayne Johnson when he wrestled in the WWE before he became a famous actor,", "The Rock is the stage and wrestling name for Dwayne Johnson when he wrestled for the WWE before he became a famous actor");
var questionFive = new runapp.clozecard("feelings", "'No. I am your father' 'No! That's not true! That's impossible!' 'Search your ... . You know it to be true", "'No. I am your father' 'No! That's not true! That's impossible!' 'Search your feelings. You know it to be true'");

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
	if (inquirer.answerThree === questionThree.clozeGone) {
		console.log("Correct! The complete sentence was " + "'" + questionThree.fullStatement + "'")
	} else {
		console.log("Wrong. The correct statement is " + questionThree.clozeGone)
	}
	if (inquirer.answerFour === questionFour.clozeGone) {
		console.log("Correct! The complete sentence was " + "'" + questionFour.fullStatement + "'")
	} else {
		console.log("Wrong. The correct statement is " + questionFour.clozeGone)
	}
	if (inquirer.answerFive === questionFive.clozeGone) {
		console.log("Correct! The complete sentence was " + "'" + questionFive.fullStatement + "'")
	} else {
		console.log("Wrong. The correct statement is " + questionFive.clozeGone)
	}
});