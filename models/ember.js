const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmberSchema = new Schema({
	content: {
		type: String,
		required: true
	},
	embers: {
		type: Schema.Types.ObjectId,
		ref: 'Ember'
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'Pyro',
		required: true
	}
});

module.exports = mongoose.model('Ember', EmberSchema);