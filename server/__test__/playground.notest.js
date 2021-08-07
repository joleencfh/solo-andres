const request = require('supertest');
const express = require('express');


// var assert = require('chai').assert


const app = express();

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});


app.get('/new', function(req, res) {
  res.status(200).json({ sm: 'sm' });
});

// request(app)
//   .get('/user')
//   .expect('Content-Type', /json/)
//   .expect('Content-Length', '15')
//   .expect(200)
//   .end(function(err, res) {
//     if (err) throw err;
//   });


  it('Testing to see if Jest works', () => {
    expect(1).toBe(1)
  })

  it('Testing to see if Jest works', () => {
    expect(1).toBe(1)
  })


  describe('GET /user', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/user')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });


  describe('GET /1new', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/user')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });