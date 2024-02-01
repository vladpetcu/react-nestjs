import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

export const onRequest = (config: InternalAxiosRequestConfig) => {
  // Do something before the request is sent
  return config;
};

export const onResponse = (response: AxiosResponse) => {
  // Do something with the response
  return response.data;
};

const GENERIC_ERROR = "something went wrong";

export const onError = (error: AxiosError) => {
  // Do something with the error
  let errorMessage = (error.response?.data as any).message || GENERIC_ERROR;
  if (Array.isArray(errorMessage)) {
    errorMessage = errorMessage[0] || GENERIC_ERROR;
  }
  return Promise.reject(errorMessage);
};
