import axios from 'axios'

class BeersService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers() {
        return this.api.get('/')
    }

    getBeerDetails(beerId) {
        return this.api.get(`/${beerId}`)
    }

    getRandomBeer() {
        return this.api.get('/random')
    }

    addBeer(beer) {
        return this.api.post('/new', beer)
    }
}

const beersService = new BeersService()

export default beersService