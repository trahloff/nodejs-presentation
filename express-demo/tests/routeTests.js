const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('GET ', () => {
    it('GET /hello should return "Hello World!"', (done) => {
        chai.request(app)
            .get('/hello')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.a('string');
                res.text.should.be.eql('Hello World!');
                done();
            });
    });
});
