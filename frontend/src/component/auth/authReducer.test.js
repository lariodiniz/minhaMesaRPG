
import AuthReducer, { INITIAL_STATE } from './authReducer'
import {TOKEN_VALIDATED, USER_FETCHED} from './authConstants'

describe('Auth Reducer', ()=> {
    it('Shoud return default state', ()=>{
        let newState = AuthReducer(undefined, {});
        expect(newState).toEqual(INITIAL_STATE);
    });

    describe('Shoud return new stat if receiving a type TOKEN_VALIDATED', ()=> {
        
        it('TOKEN_VALIDATED whithout payload', ()=>{
            let newState = AuthReducer(undefined, {
                type: TOKEN_VALIDATED 
            });
            expect(newState).toEqual({
                user: null,
                validToken: false
            });
        });

        it('TOKEN_VALIDATED whith payload', ()=>{
            let newState = AuthReducer(undefined, {
                type: TOKEN_VALIDATED,
                payload: true
            });

            expect(newState).toEqual({
                user: null,
                validToken: true
            });
        });
    })

    it('Shoud return new stat if receiving a type USER_FETCHED', ()=>{
        let user = 'user teste' 
        let newState = AuthReducer(undefined, {
            type: USER_FETCHED,
            payload: user
        });
        expect(newState).toEqual({
            user: user,
            validToken: true
        });
    });
});