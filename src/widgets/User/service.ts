import { $api, IQuery } from 'shared';
import { IUser } from './types';

const enum routes {
  users = 'users',
  user = 'users/',
}

class UserService {
  async getAll(params: IQuery) {
    try {
      const response = await $api.get(routes.users, { params });

      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default new UserService();
