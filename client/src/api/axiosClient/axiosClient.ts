import axios, { AxiosInstance } from "axios";

import { axiosConfig } from "./config";
import { onError, onRequest, onResponse } from "./interceptors/interceptors";

const createAxiosClient = () => {
  const axiosInstance: AxiosInstance = axios.create(axiosConfig);

  axiosInstance.interceptors.request.use(onRequest);
  axiosInstance.interceptors.response.use(onResponse, onError);

  return axiosInstance;
};

export const axiosClient = createAxiosClient();
