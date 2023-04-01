import axios from 'axios';


const URL = 'http://localhost:5000'

export const authenticateSignup = async (data) => {
    try {
        console.log("data",data)
       return await axios.post(`${URL}/signup`, data);
    } catch (error) {
        return error.response;
        console.log("errorr while calling signup api",error)
    }
}

export const authenticateLogin = async (data) => {
    try {
        console.log("data",data)
       return await axios.post(`${URL}/login`, data);
    } catch (error) {
        return error.response;
        console.log("errorr while calling signup api",error)
    }
}