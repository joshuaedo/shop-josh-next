import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_SHOP_API_URL;
const Authorization = process.env.NEXT_PUBLIC_SHOP_API_KEY;
const shopId = process.env.NEXT_PUBLIC_SHOP_ID;

const axiosShopInstance = axios.create({
  baseURL,
  headers: {
    accept: 'application/json',
    Authorization,
  },
});

export {baseURL, shopId, axiosShopInstance}
