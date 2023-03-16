import axios, { AxiosResponse } from 'axios';
import { Logger } from 'shared/helpers';
import { baseURL, tokenName } from '../config';

export type TResError = { message: string };
export type TResponse<T> = Promise<AxiosResponse<T, TResError>>;
export type TEmptyResponse = Promise<AxiosResponse<void, TResError>>;

const $api = axios.create({
  withCredentials: true,
  baseURL,
});

$api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem(tokenName);
  console.log('old token', token);

  config.headers.Authorization = `Bearer ${token}`;
  config.headers.Accept = '*/*';
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalReq = error.config;
    console.log('error.status', error.status);

    if (error.status === 401 && originalReq && !originalReq._isRetry) {
      originalReq._isRetry = true;
      try {
        const token = await axios.get(baseURL + 'auth/refresh');

        Logger.log('new token' + token.data);
        localStorage.setItem(tokenName, token.data.accessToken);
        originalReq._isRetry = false;
        return $api.request(originalReq);
      } catch (err: any) {
        console.error('$api error', err);
        throw err;
      }
    }
    console.error('$api error 2', error);
    throw error;
  }
);

export { $api };
