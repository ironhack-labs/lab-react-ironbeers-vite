import api, { END_POINT } from "../src/utils/api";

console.log(`Connecting to B.E API: ${END_POINT}`);
export const getAll = () => {
  return api.get("/");
};

export const getOne = (id) => {
  return api.get(`/${id}`);
};

export const getRandom = () => {
  return api.get(`/random`);
};

export const create = ({
  name,
  tagline,
  description,
  first_brewed,
  brewers_tips,
  attenuation_level,
  contributed_by,
}) => {
  return api.post("/new", {
    name,
    tagline,
    description,
    first_brewed,
    brewers_tips,
    attenuation_level,
    contributed_by,
  });
};

export const searchBeer = (query) => {
  return api.get(`/search?q=${query}`);
};
