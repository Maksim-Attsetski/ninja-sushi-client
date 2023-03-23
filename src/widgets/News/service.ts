import { getError, IQuery, Logger, $api, IGetArray } from 'shared';
import { INews } from './types';

class NewsService {
  async getAll(params: IQuery): Promise<IGetArray<INews>> {
    try {
      const response = await $api.get('news', { params });

      Logger.log('Successfully get all news', response.data);
      return response.data;
    } catch (error) {
      const err = getError(error);
      Logger.error(err?.message);
      throw err;
    }
  }
}

export default new NewsService();
