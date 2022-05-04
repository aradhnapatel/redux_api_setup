import {handleApiError, handleRequest, handleResponse} from './ClientHelper';

import axios from 'axios';

export function axiosClient(baseURL) {
  const clientInstance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  clientInstance.interceptors.request.use(handleRequest);
  clientInstance.interceptors.response.use(handleResponse, handleApiError);

  return clientInstance;
}
