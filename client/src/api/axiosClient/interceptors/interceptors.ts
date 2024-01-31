import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

export const onRequest = (config: InternalAxiosRequestConfig) => {
  // Do something before the request is sent
  return config;
};

export const onResponse = (response: AxiosResponse) => {
  // Do something with the response
  return response.data;
};

export const onError = (error: AxiosError) => {
  // Do something with the error
  return Promise.reject(error);
};
