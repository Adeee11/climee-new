import axios from 'axios';

const instance = axios.create({
  baseURL: "https://climee-cms-am6tk.ondigitalocean.app"
  // baseURL: "https://4132-122-173-57-119.ngrok.io"
});

export default instance; 