import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 15000,
});

export const fetcher = (url: string) => axiosInstance.get(url).then(response => response.data);
