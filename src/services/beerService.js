import httpBeers from "./baseBeerService";

export const getBeers = () => httpBeers.get("/beers");

export const getBeerDetail = (_id) => 
httpBeers.delete(`/beers/${_id}`)