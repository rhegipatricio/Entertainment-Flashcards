//exports basic card function

exports.basiccard = function basiccard (front, back) {

	this.front = front;
	this.back = back

};

exports.clozecard = function clozecard (clozeGone, partialText, fullText) {

	this.clozeGone = clozeGone;
	this.partialText = partialText;
	this.fullText = fullText;

};