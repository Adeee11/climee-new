import axios from 'axios';

const instance = axios.create({
  // baseURL: "https://api.weatherapi.com/v1"
  baseURL: "https://api.openweathermap.org/data/2.5"
});

export default instance;