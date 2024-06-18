import axios from 'axios';
import { baseURL, Authorization } from '@/config';

const axiosShopInstance = axios.create({
  baseURL,
  headers: {
    accept: 'application/json',
    Authorization,
  },
});

export { axiosShopInstance };
