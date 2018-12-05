const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const should = chai.should();
chai.use(chaiHttp);

const agent = chai.request.agent(server);

const Pyro = require("../models/pyro");

describe("Pyro", function () {
	// TESTS WILL GO HERE.
});