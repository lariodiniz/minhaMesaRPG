import axios from 'axios'
import { constantes } from '../../constants'
import {TOKEN_VALIDATED, USER_FETCHED} from './authConstants'

export function login(values){
    return submit(values, `${constantes.OAPI_URL}/login`)
}

export function signup(values){
    return submit(values, `${constantes.OAPI_URL}/sigup`)
}

function submit(values, url){

    return dispatch => {
         axios.post(url, values)
            .then(resp => {                
                dispatch([
                    {type: USER_FETCHED, payload: resp.data}
                ])
            })
            .catch( e => {
                e.response.data.errors.forEach(
                    error => console.log(error)
                )
            })
    }
}

export function logout(){
    return { type: TOKEN_VALIDATED, payload: false}
}

export function validateToken(token){
    
     return async dispatch => {
        if(token) {            
            await axios.post(`${constantes.OAPI_URL}/validateToken`, {token})
            .then(resp => {
                console.log(resp)
                dispatch({type: TOKEN_VALIDATED, payload: resp.data.valid})
            })
            .catch( e => dispatch({type: TOKEN_VALIDATED, payload: false}))
        } else {
            dispatch({ type: TOKEN_VALIDATED, payload: false})
        }

    }
}