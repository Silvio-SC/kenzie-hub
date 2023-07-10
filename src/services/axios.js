import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://kenziehub.herokuapp.com',
    headers: {
        'Content-Type':'application/json',
    }
})
