const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../roommate-app');

chai.should();
chai.use(chaiHttp);

describe('V1 Roommate', () => {

    before(function(){
        //
        // Get JWT token, ophalen door POST? Of testtoken?
        //
        global.token = 'eyJhbGciOiJI....u5CSpyHI';
    });

    it('GET /apiv1/roommate', (done) => {

        console.log('Token: ' + global.token);

        chai.request(server)
            .get('/apiv1/roommate')
            .end( (err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.should.be.length(5);
            });
        done()
    });

    it('GET /apiv1/roommate/linda', (done) => {
        chai.request(server)
            .get('/apiv1/roommate/linda')
            .end( (err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.should.have.property('cooking skills');
            });
        done()
    });

    it('GET /apiv1/blaba', (done) => {
        chai.request(server)
            .get('/apiv1/blaba')
            .end( (err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
            });
        done()
    });

});
