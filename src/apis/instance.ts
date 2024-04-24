import { BASE_URL } from "@/constants/env";
import axios from "axios";

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
});

instance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = localStorage.getItem('token')
    return config
  }
);

instance.interceptors.response.use();
