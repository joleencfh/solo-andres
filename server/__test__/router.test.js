const supertest= require('supertest');
const app = require('../index');
const request = supertest(app);
const mongoose = require('mongoose');
// const express = require('express');

// const router = require('../routes/router')
// describe('Sample Test', () => {
//     it('should test that true === true', () => {
//       expect(true).toBe(true)
//     })
//   })

afterAll( async () => {
   await mongoose.connection.close();
  //  await app.close();
  });

describe("login request should give 200", () => {

    it("should give a 200", async () => {
      const res =  await request.post('/login').send({email: "joe@biden.us", password:"joe"});        
      expect(res.status).toBe(200)
    // .end(done);
                 
    },


)})

describe('register should give a status of 200 when details are correct', () => {
  it ('should give 200', async () => {
    const res = await request.post('/register').send({email: "john11@doe1.us", password:"joe", firstName: "joe", lastName: "John"})
    expect(res.status).toBe(201);
  })
})



// /wait new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error


// router.post('/login', user.getUser);
// router.post('/register', user.createUser);
// router.get('/options', option.getOptions);
// router.post('/addToWl', user.addToWatchlist);
// router.post('/addToPf', user.addToPortfolio);
// router.put('/removeFromWl', user.removeFromWatchlist)
// router.put('/sell', user.sell);