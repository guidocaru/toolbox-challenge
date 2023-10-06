import chai from "chai"
import chaiHttp from "chai-http"
import { app } from "../app.js"
import { expect } from "chai"

chai.use(chaiHttp)

describe("GET /files/list", () => {
    it('it should GET files list', (done) => {
        chai.request(app)
            .get('/files/list')
            .end((err, res) => {
                expect(res).to.have.status(200)
                expect(res.body).to.be.an('array');
                done();
            });
    });
    it('it should handle errors for GET files list', (done) => {
        chai.request(app)
            .get('/files/nonexistent-endpoint')
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            });
    });
})

describe("GET /files/data", () => {
    it('it should GET files data', (done) => {
        chai.request(app)
            .get('/files/data')
            .end((err, res) => {
                expect(res).to.have.status(200)
                expect(res.body).to.be.an('array');
                done();
            });
    });
})

