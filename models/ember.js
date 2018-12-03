const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmberSchema = new Schema({
	content: {
		type: String,
		required: true
	},
	replies: {
		type: Schema.Types.ObjectId,
		ref: 'Ember'
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'Pyro',
		required: true
	}
});
// https://github.com/edwintcloud/Reddit-js/commit/2c6beb6e1e7093ad7a21e5c56763fd393a819
EmberSchema.pre('find', function (next) {
	this.populate('replies');
	next();
});

module.exports = mongoose.model('Ember', EmberSchema);