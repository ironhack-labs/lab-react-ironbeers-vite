import axios from "axios";

export const END_POINT = "https://ih-beers-api2.herokuapp.com/beers";

const api = axios.create({
  baseURL: END_POINT,
  timeout: 5000,
});

export default api;
