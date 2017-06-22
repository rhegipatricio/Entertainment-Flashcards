// links runapp to basiccard.js
var runapp = require('./runapp.js');


//npm inquirer
var inquirer = require("inquirer");

//shows the front and the back of the card
var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
};

//questions that take from runnapp.js
var questionOne = new runapp.basiccard(
	"Who is the Logo of the NBA?", "Jerry West");

var questionTwo = new runapp.basiccard(
	"What team did Michael Jordan and the Chicago Bulls beat in Jordan's last ever NBA Finals?", "Utah Jazz");

var questionThree = new runapp.basiccard(
	"What year did Kobe Bryant get drafted?", "1996");

var questionFour = new runapp.basiccard(
	"Although he was supremely successful in his career, Kobe Bryant did not get drafted first in his draft. What was the nickname of the player that DID get drafted first?", "The Answer");

var questionFive = new runapp.basiccard(
	"Who's nickname is The Truth?", "Paul Pierce");

var questionSix = new runapp.basiccard(
	"Dwight Howard was the second man to use this monkier, originally used by Shaquille O'Neal", "Superman");

var questionSeven = new runapp.basiccard(
	"What type of 'brothers' are Steph Curry and Klay Thompson?", "splash");

var questionEight = new runapp.basiccard(
	"What team won the very first NBA Lottery?", "Knicks");

var questionNine = new runapp.basiccard(
	"How many titles does Michael Jordan have?", "Six");

var questionTen = new runapp.basiccard(
	"What did Lebron James take to South Beach when he decided to sign with the Miami Heat", "his talents");

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
}, {
	type: 'input',
	name: 'answerFive',
	message: questionFive.front
}, {
	type: 'input',
	name: 'answerSix',
	message: questionSix.front
}, {
	type: 'input',
	name: 'answerSeven',
	message: questionSeven.front
}, {
	type: 'input',
	name: 'answerEight',
	message: questionEight.front
}, {
	type: 'input',
	name: 'answerNine',
	message: questionNine.front
}, {
	type: 'input',
	name: 'answerTen',
	message: questionTen.front
}

//function that tells the user if they're right or wrong
]).then(function(inquirer) {
	//if is correct
	if (inquirer.answerOne === questionOne.back) {
		console.log("It's Good!")
	//else is if it is not correct 
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
	if (inquirer.answerFive === questionFive.back) {
		console.log('Yes! Pierce with the dagger!')
	} else {
		console.log("Wrong! The Celtics would have won another championship if you typed in Paul Pierce")
	}
	if (inquirer.answerSix === questionSix.back) {
		console.log('Yes! Superman is in the building!')
	} else {
		console.log("Nope! Dwight Howard would shoot better free throws if you typed in SUPERMAN")
	}
	if (inquirer.answerSeven === questionSeven.back) {
		console.log('Splash! Klay and Curry have been incredible. Dubs win again!')
	} else {
		console.log("Oh No! The Warriors would have beaten the Cavaliers in 2016 if you typed in SPLASH")
	}
	if (inquirer.answerEight === questionEight.back) {
		console.log('Yes! Patrick Ewing is coming to town!')
	} else {
		console.log("Wrong! The correct answer is the KNICKS")
	}
	if (inquirer.answerNine === questionNine.back) {
		console.log('Yes! Michael Jordan is the greatest of all time with SIX titles!')
	} else {
		console.log("Wrong! MJ has SIX NBA championships")
	}
	if (inquirer.answerTen === questionTen.back) {
		console.log('Yes! Pat Riley was able to get the Big Three when Lebron took HIS TALENTS to South Beach')
	} else {
		console.log("Wrong! He took 'HIS TALENTS' to South Beach in 2010")
	}
});