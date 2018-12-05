const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const should = chai.should();

const Flare = require('../models/flare');

const flare = {
	title: 'flare title',
	url: 'https://www.google.com',
	summary: 'flare summary'
};

Flare.findOneAndRemove(flare, () => {
	Flare.find((err, flares) => {
		let flareCount = flares.count;

		chai
			.request('localhost:8000')
			.post('/flares/new')
			.send(flare)
			.then(res => {
				Flare.find((err, flares) => {
					flareCount.should.be.equal(flares.length - 1);
					res.should.have.status(200);
					return done();
				});
			})
			.catch(err => {
				return done(err);
			});
	});
})