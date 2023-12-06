import axios from "axios";


export const api = axios.create({
  baseURL: 'http://localhost:3000'
});

api.interceptors.request.use(async (config: any) => {
  return config;
});
