const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const should = chai.should();
chai.use(chaiHttp);

const agent = chai.request.agent(server);
const Pyro = require("../models/pyro");

// describe("Pyro", function () {
// 	it("should not be able to login if they have not registered", done => {
// 		agent.post("/login", { email: "wrong@wrong.com", password: "nope" }).end(function (err, res) {
// 			res.status.should.be.equal(401);
// 			done();
// 		});
// 	});
// });