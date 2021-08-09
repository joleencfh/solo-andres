import {login, register} from './AuthUtils';
// import {findUser} from '../Services/ApiService';


describe('loging function should call findUser', () => {

    test('findUser should be called once', () => {
        const email = 'john@doe.com';
        const password = 'john';
        const findUser = jest.fn();
        
        login(email, password);
        expect(findUser).toHaveBeenCalled(1);
    })
})


