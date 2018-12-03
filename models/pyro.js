const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;


const PyroSchema = new Schema({
	pyroname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		select: false
	},
	creation: {
		type: Date
	},
	updation: {
		type: Date
	}
});

// Define the callback with a regular function to avoid problems with this
PyroSchema.pre("save", function (next) {
	// SET creation AND updation
	const now = new Date();
	this.updation = now;

	if (!this.creation) {
		this.creation = now;
	}

	// ENCRYPT PASSWORD
	const pyro = this;
	if (!pyro.isModified("password")) {
		return next();
	}
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(pyro.password, salt, (err, hash) => {
			pyro.password = hash;
			next();
		});
	});
});

// Need to use function to enable this.password to work.
PyroSchema.methods.comparePassword = function (password, done) {
	bcrypt.compare(password, this.password, (err, isMatch) => {
		done(err, isMatch);
	});
};

module.exports = mongoose.model("Pyro", PyroSchema);