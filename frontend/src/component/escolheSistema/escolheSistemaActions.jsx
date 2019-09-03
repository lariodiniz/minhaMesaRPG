import axios from 'axios'
import { constantes } from '../../constants'
import { GET_SYSTEM } from './escolheSistemaConstants'

const INITIAL_VALUES = {sistemas: [{}]}

export function getSistemas() {

    const request = axios.get(`${constantes.API_URL}/api/system/`)

    return {
        type: GET_SYSTEM,
        payload: request
    }
}
