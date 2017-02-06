const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('userManagement ', () => {

    it('GET /database should return HTTP404', (done) => {
        chai.request(app)
            .get('/database')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });

    it('GET /database/test should return NotFoundError', (done) => {
        chai.request(app)
            .get('/database/test')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.eql('NotFoundError: Key not found in database [test]');
                done();
            });
    });

    it('PUT /database/test/123 should create key [test] with value [123]', (done) => {
        chai.request(app)
            .put('/database/test/123')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.eql('key: "test" now has value: "123"');
                done();
            });
    });

    it('GET /database/test should return value [123]', (done) => {
        chai.request(app)
            .get('/database/test')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.eql("123");
                done();
            });
    });

    it('DELETE /database/test should delete key [test]', (done) => {
        chai.request(app)
            .delete('/database/test')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.eql('successfully deleted key: "test"');
                done();
            });
    });
});
