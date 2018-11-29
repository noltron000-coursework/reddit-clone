const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlareSchema = new Schema({
	title: { type: String, required: true },
	subflame: { type: String }, // you can choose your subreddit
	synopsis: { type: String, required: true }, // synopsis implies a short body text
	creation: { type: Date }, // when the flare was originally created
	updation: { type: Date }  // updation is like creation
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