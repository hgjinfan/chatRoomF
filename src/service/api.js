import axios from 'axios'

export const userLogin = (form) => {
    return (axios.post('/login', form))
}