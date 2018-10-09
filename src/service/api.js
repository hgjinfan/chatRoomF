import axios from 'axios'

export const userLogin = (form) => {
    return (axios.post('/login', form))
}

export const getUser = (user_id) => {
    return (axios.get('/user',{user_id}))
}