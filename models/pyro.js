const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PyroSchema = new Schema({
	pyroname: {
		type: String, required: true
	},
	email: {
		type: String, required: true
	},
	password: {
		type: String, select: false
	},
	creation: {
		type: Date
	},
	updation: {
		type: Date
	}
});

// Define the callback with a regular function to avoid problems with this

PyroSchema.pre("save", (next) => {
	// SET creation AND updation
	const now = new Date();
	this.updation = now;

	if (!this.createdAt) {
		this.creation = now;
	}

	next();
});

module.exports = mongoose.model("Pyro", PyroSchema);