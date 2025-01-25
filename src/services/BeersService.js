import { createHttp } from "./baseService";

const http = createHttp()

export const listBeers = () => http.get('/beers')