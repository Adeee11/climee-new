import axios from 'axios';

const instance = axios.create({
  // baseURL: "https://b754-106-214-210-195.ngrok.io"
  baseURL: "https://climee-cms-am6tk.ondigitalocean.app"
});

export default instance; 