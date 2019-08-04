import axios from 'axios'
import { constantes } from '../../constants'
import {TOKEN_VALIDATED, USER_FETCHED} from './authConstants'

export function login(values){
    return submit(values, `${constantes.OAPI_URL}/login/`)
}

export function signup(values){    
    return submit(values, `${constantes.OAPI_URL}/api/user/`)
}

function submit(values, url){

    return dispatch => {
         axios.post(url, values)
            .then(resp => {                
                dispatch([
                    {type: USER_FETCHED, payload: resp.data}
                ])
            })
            .catch( (e) => {
                console.log(e.response.data)
                let obj = e.response.data
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                      console.log(key + ": " + obj[key]);
                    }
                  }
            })
    }
}

export function logout(){
    return { type: TOKEN_VALIDATED, payload: false}
}

export function validateToken(token){
    
     return async dispatch => {
        if(token) {            
            await axios.post(`${constantes.OAPI_URL}/auth-jwt-verify/`, {token})
            .then(resp => {
                dispatch({type: TOKEN_VALIDATED, payload: resp.data})
            })
            .catch( e => dispatch({type: TOKEN_VALIDATED, payload: false}))
        } else {
            dispatch({ type: TOKEN_VALIDATED, payload: false})
        }

    }
}