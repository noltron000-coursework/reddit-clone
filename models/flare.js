const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	title: { type: String, required: true },
	subflame: { type: String, required: true }, // you can choose your subreddit
	synopsis: { type: String, required: true }, // synopsis implies a short body text
	creation: { type: Date }, // when the flare was originally created
	updation: { type: Date }  // updation is like creation
});

PostSchema.pre("save", function (next) {
	// SET createdAt AND updatedAt
	const now = new Date();
	this.updatedAt = now;

	if (!this.createdAt) {
		this.createdAt = now;
	}

	next();
});

module.exports = mongoose.model("Post", PostSchema);