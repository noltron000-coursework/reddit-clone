// Mongoose Connection
const mongoose = require('mongoose');
assert = require('assert');

const url = 'mongodb://localhost/flamewarz-db';
mongoose.Promise = global.Promise;
mongoose.connect(
	url,
	{ useNewUrlParser: true },
	(err, db) => {
		// db.close(); turn on for testing
		// assert.equal(null, err);
		console.log('Connected successfully to database');
	}
);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'));
mongoose.set('debug', true);

module.exports = mongoose.connection;