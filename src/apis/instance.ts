import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:5173/",
});

instance.interceptors.request.use();

instance.interceptors.response.use();
