//exports basic card function

exports.BasicCard = function BasicCard (front, back) {

	this.front = front;
	this.back = back

};

exports.ClozeCard = function ClozeCard (clozeGone, missingText, completeStatement) {

	this.clozeGone = clozeGone;
	this.missingText = missingText;
	this.fullStatement = completeStatement;

};