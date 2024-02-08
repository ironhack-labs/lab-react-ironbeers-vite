import httpBeers from "./baseBeersServices";

export const getBeerDetail = (id) =>
httpBeers.get(`/${id}`);