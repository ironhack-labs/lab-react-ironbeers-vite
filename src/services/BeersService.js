import { createHttp } from "./baseService";

const http = createHttp()

export const listBeers = () => http.get('/beers')


export const getBeer = (id) => http.get(`/beers/${id}`)

export const randomBeer = () => http.get('/beers/random')

export const createBeer = (data) => http.post('/beers/new', data)
 
export const searchBeer = (query) => http.get('/beers/search',{ params: {  q: query }})



