import axios, {
  AxiosRequestConfig,
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { Cat } from "../types";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:3002/",
};

const onRequest = (config: InternalAxiosRequestConfig) => {
  // Do something before the request is sent
  return config;
};

const onResponse = (response: AxiosResponse) => {
  // Do something with the response
  return response.data;
};

const onError = (error: AxiosError) => {
  // Do something with the error
  return Promise.reject(error);
};

const axiosInstance: AxiosInstance = axios.create(axiosConfig);
axiosInstance.interceptors.request.use(onRequest, onError);
axiosInstance.interceptors.response.use(onResponse, onError);

export const getCats = () => axiosInstance.get<never, Cat[]>("/cats");
