import { $api, getError, IQuery, Logger } from 'shared';
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
      const err = getError(error);
      Logger.error(err?.message);
      throw err;
    }
  }
}

export default new UserService();
