import { createHttp } from "./baseService";

const http = createHttp()

export const listBeers = () => http.get('/beers')


export const getBeer = (id) => http.get(`/beers/${id}`)

export const createBeer = (data) => http.post('/beers/new', data)



