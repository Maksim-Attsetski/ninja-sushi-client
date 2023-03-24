import axios from 'axios';
import { $api, baseURL, getError, Logger, TGeo, tokenName } from 'shared';
import { ILogin, ISignup, IUser } from 'widgets/User';

export interface IResponse {
  user: IUser<string>;
  tokens: string;
}

class AuthService {
  setToken(data: IResponse | null) {
    data
      ? localStorage.setItem(tokenName, data.tokens)
      : localStorage.removeItem(tokenName);
  }

  async signup(signupDto: ISignup) {
    try {
      const response = await $api.post<IResponse>('auth/signup', signupDto);

      this.setToken(response.data);

      Logger.log('Success API signup request', response.data);
      return response.data.user;
    } catch (error) {
      const err = getError(error);
      Logger.error(err?.message);
      throw err;
    }
  }

  async login(loginDto: ILogin) {
    try {
      const response = await $api.post<IResponse>('auth/login', loginDto);

      this.setToken(response.data);

      Logger.log('Success API login request', response.data);
      return response.data.user;
    } catch (error) {
      const err = getError(error);
      Logger.error(err?.message);
      throw err;
    }
  }

  async authByGoogle(data: { credential: string; location: TGeo }) {
    try {
      const response = await $api.post<IResponse>('auth/google', data);

      this.setToken(response.data);
      Logger.log('Success API auth by Google', response.data);

      return response.data.user;
    } catch (error) {
      const err = getError(error);
      Logger.error(err?.message);
      throw err;
    }
  }

  async logout() {
    try {
      const response = await $api.get<boolean>('auth/logout');

      this.setToken(null);

      Logger.log('Success API logout request');
      return response.data;
    } catch (error) {
      const err = getError(error);
      Logger.error(err?.message);
      throw err;
    }
  }

  async refresh() {
    try {
      const response = await axios.get<IResponse>('auth/refresh', {
        baseURL,
        withCredentials: true,
      });
      this.setToken(response.data);

      Logger.log('Success API refresh request', response.data);
      return response.data.user;
    } catch (error) {
      const err = getError(error);
      Logger.error(err?.message);
      throw err;
    }
  }
}

export default new AuthService();
