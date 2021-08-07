jestfunction('URL/logi') => {
  
}


//importing somthing to mock ----- ApiService response, in the function login
//imported another component

// Arrange
jest.mock('./pathtoApiService', () => {
    login: () => {email: "joe@biden.us"; password:'joe'}
})

//mocking other simpler stuff.

const otherfunction = jest.fn();


// /other mocked stuff
<OtherComponent name={"Joe"}></OtherComponent>

// Action
//events ---click, type....

// Expect 
//expect stuff 





// "test": "jest --detectOpenHandles ",
// "test:watch": "jest --watch --detectOpenHandles "
