import axios from "axios";

export const createHttp = () => {
    const http = axios.create ({
        baseURL: 'https://ih-beers-api2.herokuapp.com'
    })
    http.interceptors.response.use(
        (response) => response.data,
        (error) => Promise.reject(error)
    )
    return http
}
