const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubFlameSchema = new Schema({
	title: { // title of subflame
		type: String,
		required: true
	},
	synopsis: { // synopsis implies a short body text
		type: String,
		required: true
	},
	creation: { // when the subflame was originally created
		type: Date
	},
	updation: { // updation is like creation
		type: Date
	},
});

SubFlameSchema.pre("save", (next) => {
	// SET creation AND updation
	const now = new Date();
	this.updation = now;

	if (!this.createdAt) {
		this.creation = now;
	}

	next();
});

// // Generate a URL Friendly Title
// let string = this.title.toLowerCase();
// let newString = '';
// const alphabet = 'abcdefghijklmnopqrstuvwxyz-1234567890';

// for (let char = 0; char <= string.length; char += 1) {
// 	// loop through the string
// 	if (alphabet.includes(char)) {
// 		// check if it is a letter number or hyphen
// 		//	 if so, add char to newString
// 		newString += char;
// 	} else if (' _'.includes(char)) {
// 		// else, check if it is a space or underscore
// 		//	 if so, add hyphen to newString
// 		newString += '-';
// 	}
// 	// else, drop character by not appending it
// } // slug
// this.urlFriendlyTitle = newString;

module.exports = mongoose.model("SubFlame", SubFlameSchema);