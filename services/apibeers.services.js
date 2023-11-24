import axios from 'axios';

class beerService {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        });
    }

    getBeers() {
        return this.api.get('/');
    }

    getBeersDetails(_id) {
        return this.api.get(`/${_id}`);
    }
}

const apiService = new beerService();

export default apiService;