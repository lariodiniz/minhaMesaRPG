import moxios from 'moxios' 
import { testStore } from '../common/utils/utilsTests'

import { login } from '../component/auth/authActions'


describe('validateToken action', () =>{

    beforeEach(() =>{
        moxios.install();

    });

    afterEach(() =>{
        moxios.uninstall();            
    });    

    test('Store is update correctly', () => {
        let expectedState = {"user": null, "validToken": false};

        let store = testStore({});

        moxios.wait(() =>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response: { data: 'teste'}
            })
        });
        
        store.dispatch(login());
        let newState = store.getState();
        //expect(newState.auth).toBe(expectedState);

    });

})