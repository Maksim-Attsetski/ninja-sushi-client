import { $api, tokenName } from 'shared';
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
    const response = await $api.post<IResponse>('auth/signup', signupDto);

    this.setToken(response.data);
    return response.data.user;
  }

  async login(loginDto: ILogin) {
    const response = await $api.post<IResponse>('auth/login', loginDto);

    this.setToken(response.data);
    return response.data.user;
  }

  async logout() {
    const response = await $api.get<boolean>('auth/logout');

    this.setToken(null);
    return response.data;
  }

  async refresh() {
    const response = await $api.get<IResponse>('auth/refresh');

    this.setToken(response.data);
    return response.data.user;
  }
}

export default new AuthService();
