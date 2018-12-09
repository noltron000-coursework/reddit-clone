const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const should = chai.should();

const server = require("../server");
const agent = chai.request.agent('http://localhost:3000');
const Pyro = require("../models/pyro");


describe("Pyro", function () {
	// invalid login
	it("should not be able to login if they have not registered", (done) => {
		agent.post("/login", {
			email: "wrong@wrong.com",
			password: "nope"
		}).end(function (err, res) {
			res.status.should.be.equal(401);
			done()
		});
	});

	// signup
	it("should be able to signup", done => {
		Pyro.findOneAndRemove({ pyroname: "testone" }, function () {
			agent
				.post("/signup")
				.send({ pyroname: "testone", password: "password", email: "email" })
				.end(function (err, res) {
					// console.log(res.body);
					res.should.have.status(200);
					agent.should.have.cookie("nToken");
					done();
				});
		});
	});

	// logout
	it("should be able to logout", done => {
		agent.get("/logout").end(function (err, res) {
			res.should.have.status(200);
			agent.should.not.have.cookie("nToken");
			done();
		});
	});

	// login
	it("should be able to login", done => {
		agent
			.post("/login")
			.send({ pyroname: "testone", password: "password" })
			.end(function (err, res) {
				res.should.have.status(200);
				agent.should.have.cookie("nToken");
				done();
			});
	});
});

// // test/posts.js

// before(done => {
// 	agent
// 		.post("/login")
// 		.send({ username: "testone", password: "password" })
// 		.end(function (err, res) {
// 			done();
// 		});
// });