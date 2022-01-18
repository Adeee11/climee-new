import axios from 'axios';

const instance = axios.create({
  baseURL: "https://climee-cms-am6tk.ondigitalocean.app"
  // baseURL: "https://ea3a-2401-4900-1f32-4d1-85ab-4d10-1786-2526.ngrok.io"
});

export default instance; 