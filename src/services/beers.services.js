import axios from 'axios'

class BeersClass {
    constructor() {
        this.api = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`
        })
    }

    getAllBeers() {
        return this.api.get('/')
    }

    getDetailsBeer(_id) {
        return this.api.get(`/${_id}`)
    }

    getRandomMovie() {
        return this.api.get(`/random`)
    }

    postNewBeer(beer) {
        return this.api.post(`/new`, beer)
    }

}

const beersService = new BeersClass()

export default beersService