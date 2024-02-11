import httpBeers from "./baseBeerService";

export const getBeers = () => httpBeers.get("/beers");

export const getBeerDetail = (_id) => 
httpBeers.get(`/beers/${_id}`) 

export const getRandomBeer = () => httpBeers.get("/beers/random") 

export const createBeer = () => httpBeers.post("/beers/new")

export const searchBeer = (searchTerm) => httpBeers.get(`/beers/search?q=${searchTerm}`)