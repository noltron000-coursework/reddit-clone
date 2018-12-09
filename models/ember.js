const mongoose = require('mongoose');
const Autopopulate = require('../utilities/autopopulate');
const Schema = mongoose.Schema;

const EmberSchema = new Schema({
	content: {
		type: String,
		required: true
	},
	embers: [{
		type: Schema.Types.ObjectId,
		ref: 'Ember'
	}],
	author: {
		type: Schema.Types.ObjectId,
		ref: 'Pyro'
	}
}).pre('findOne', Autopopulate('embers'))
	.pre('find', Autopopulate('embers'));

module.exports = mongoose.model('Ember', EmberSchema);