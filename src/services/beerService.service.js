import axios from 'axios'

class BeerService {
	constructor() {
		this.api = axios.create({
			baseURL: `https://ih-beers-api2.herokuapp.com`,
		})
	}

	getBeers() {
		return this.api.get('/beers')
	}

	getBeerDetails(beerId) {
		return this.api.get(`/beers/${beerId}`)
	}

	getRandomBeer() {
		return this.api.get('/beers/random')
	}

	createBeer(beerData) {
		return this.api.post('/beers/new', beerData)
	}
}

const beerService = new BeerService()

export default beerService
