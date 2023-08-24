import axios from "axios"

class BeerService {

    constructor() {
        this.api = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`
        })
    }

    getBeers() {
        return this.api.get('/')
    }

    getOneBeer(beer_id) {
        return this.api.get(`/${beer_id}`)
    }

    getRandomBeer() {
        return this.api.get('/random')
    }

    createBeer(beer_data) {
        return this.api.post('/new', beer_data)
    }


}

const beersService = new BeerService()

export default beersService