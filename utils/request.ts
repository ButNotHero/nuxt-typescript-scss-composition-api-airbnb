import axios, { AxiosInstance, AxiosResponse } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: process.env.NUXT_APP_API_URL,
  params: {
    // query параметры
    api_key: process.env.NUXT_APP_API_KEY,
  },
  timeout: Number(process.env.NUXT_APP_API_TIMEOUT),
});

instance.interceptors.response.use(
  (response): AxiosResponse => response,
  (error) => {
    if (error.response.status !== 200) {
      console.error(`Request failed. Status code: ${error.response.status}`);
    }
    return Promise.reject(error);
  },
);

export default instance;
