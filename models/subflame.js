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
	}
});

SubFlameSchema.pre("save", (next) => {
	// SET createdAt AND updatedAt
	const now = new Date();
	this.updation = now;

	if (!this.createdAt) {
		this.creation = now;
	}

	next();
});

module.exports = mongoose.model("SubFlame", SubFlameSchema);