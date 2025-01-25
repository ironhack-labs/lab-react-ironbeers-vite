import { createHttp } from "./baseService";

const http = createHttp()

export const listBeers = () => http.get('/beers')
listBeers
export const getBeer = (id) => http.get(`/beers/${id}`)


