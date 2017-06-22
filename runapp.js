//exports basic card function

exports.basiccard = function basiccard (front, back) {

	this.front = front;
	this.back = back

};

exports.clozecard = function clozecard (clozeGone, missingText, completeStatement) {

	this.clozeGone = clozeGone;
	this.missingText = missingText;
	this.fullStatement = completeStatement;

};