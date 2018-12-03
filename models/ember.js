const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmberSchema = new Schema({
	content: {
		type: String, required: true
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'Pyro',
		required: true
	}
});

module.exports = mongoose.model('Ember', EmberSchema);
