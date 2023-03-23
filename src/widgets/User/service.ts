import { $api, getError, IGetArray, IQuery, Logger } from 'shared';
import { IUser, TUserWithGeneric } from './types';

const enum routes {
  users = 'users',
  user = 'users/',
}

class UserService {
  async getAll(params: IQuery): Promise<IGetArray<IUser<any>>> {
    try {
      const response = await $api.get(routes.users, { params });

      return response.data;
    } catch (error) {
      const err = getError(error);
      Logger.error(err?.message);
      throw err;
    }
  }

  async get(_id: string, isFull?: boolean) {
    try {
      const response = await $api.get(routes.user + _id, {
        params: { isFull },
      });

      console.log('response.data', response.data);

      return response.data;
    } catch (error) {
      const err = getError(error);
      Logger.error(err?.message);
      throw err;
    }
  }

  async editUser(userId: string, user: TUserWithGeneric) {
    try {
      const response = await $api.patch(routes.user + userId, user);

      return response.data;
    } catch (error) {
      const err = getError(error);
      Logger.error(err?.message);
      throw err;
    }
  }
}

export default new UserService();
