import { $api, IQuery, Logger } from 'shared';

class RestaurantService {
  async get(params: IQuery) {
    try {
      const response = await $api.get('/restaurants', { params });

      Logger.log('Successfully get restaurants', response);

      return response.data;
    } catch (error: any) {
      Logger.error(error);
      throw error;
    }
  }
}

export const restaurantService = new RestaurantService();
