import httpBeers from "./baseBeerService";

export const getBeers = () => httpBeers.get("/beers");