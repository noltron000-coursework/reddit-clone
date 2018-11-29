const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlareSchema = new Schema({
	title: { // title of post/flare
		type: String,
		required: true
	},
	subflame: { // you can choose your subreddit
		type: String,
		required: true
	},
	synopsis: { // synopsis implies a short body text
		type: String,
		required: true
	},
	creation: { // when the flare was originally created
		type: Date
	},
	updation: { // updation is like creation
		type: Date
	}
});

FlareSchema.pre("save", (next) => {
	// SET createdAt AND updatedAt
	const now = new Date();
	this.updation = now;

	if (!this.createdAt) {
		this.creation = now;
	}

	next();
});

module.exports = mongoose.model("Flare", FlareSchema);