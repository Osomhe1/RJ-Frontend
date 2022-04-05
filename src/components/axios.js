import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://www.giropay.xyz/api/v1/giro-app',
});
export default instance;
