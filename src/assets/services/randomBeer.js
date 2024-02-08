import axios from "axios";

const httpRandomBeers = axios.create({
    baseURL: "https://ih-beers-api2.herokuapp.com/beers/random"
});

httpRandomBeers.interceptors.response.use(
    (response) => response.data,
    (error) => {
        return Promise.reject(error);
    }
);


export default httpRandomBeers;