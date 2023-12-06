import axios from "axios";

//
export const api = axios.create({
  baseURL: 'http://18.224.94.36:3000'
});

api.interceptors.request.use(async (config: any) => {
  return config;
});
