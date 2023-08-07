import axios from 'axios'

const API_URL = 'https://ecom.alphacs.in/api/'

// register user and Login

const register = async(userData) => {
    const response =  await axios.post(API_URL + 'login', userData)
    console.log(response)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}


const generateOtp = async(userOtp) => {
    const response =  await axios.post(API_URL + 'generate-otp', userOtp)
    console.log(response)
    return response.data
}

const authService = {
    register,
    generateOtp
}

export default authService