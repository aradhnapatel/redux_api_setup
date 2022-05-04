import Axios from 'axios';
import {apiInstance} from './index';

export function setToken(token) {
  Object.assign(apiInstance.defaults.headers, {
    Authorization: `${token}`,
  });
}

export function removeToken() {
  delete apiInstance.defaults.headers.Authorization;
}
export async function handleRequest(request) {
  if (__DEV__) {
    console.log(request);
  }

  return request;
}

export function handleResponse(value) {
  if (__DEV__) {
    console.log(value);
  }
  return value;
}

export async function handleApiError(error) {
  if (Axios.isCancel(error)) {
    console.log('Canceled');
    throw error;
  }

  if (__DEV__) {
    console.log(error);
  }

  if (!error.response) {
    throw error;
  }
  if (error.response.status === 401 || error.response.status === 402) {
    //  Toast.show("Please authorize to proceed");
    //  await logout();
    //  NavigationService.navigate("RequestSignInLink");
    throw error;
  } else if (error.response.status === 500) {
    // Toast.show("Server error has occurred. Please try again later");
    throw error;
  }

  throw error;
}
