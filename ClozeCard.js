//links this to runapp
var runapp = require('./runapp.js');


//npm inquirer
var inquirer = require("inquirer");

//var questions
var questionOne = new runapp.clozecard("Blue French Horn", "... is what Ted gave to Robin after their first date.", "Blue French Horn is what Ted gave to Robin after their first date.");
var questionTwo = new runapp.clozecard("three times", "Sheldon knocks ... when he goes to Penny's apartment", "Sheldon knocks three times when he goes to Penny's apartment");

//pulls from inquirer to show questions to user
inquirer.prompt([{
	type: 'input',
	name: 'answerOne',
	message: 'questionOne.missingText'
}, {
	type: 'input',
	name: 'answerTwo',
	message: 'questionTwo.missingText'
}









}])