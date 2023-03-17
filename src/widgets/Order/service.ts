import { $api, getError, IQuery, Logger } from 'shared';
import { ICreateOrder, IOrder } from './types';

class OrderService {
  async getAll(params: IQuery): Promise<IOrder[]> {
    try {
      const response = await $api.get('order', { params });

      Logger.log('Successfully get orderlist', response.data);
      return response.data;
    } catch (err) {
      const error = getError(err);
      Logger.error(error?.message);
      throw error;
    }
  }
  async create(newOrder: ICreateOrder): Promise<IOrder> {
    try {
      const response = await $api.post('order', newOrder);

      Logger.log('Successfully created order', response.data);
      return response.data;
    } catch (err) {
      const error = getError(err);
      Logger.error(error?.message);
      throw error;
    }
  }
  async edit(_id: string, order: IOrder): Promise<IOrder> {
    try {
      const response = await $api.patch('order/' + _id, order);

      Logger.log('Successfully updated order', response.data);
      return response.data;
    } catch (err) {
      const error = getError(err);
      Logger.error(error?.message);
      throw error;
    }
  }
  async delete(orderId: string): Promise<string> {
    try {
      const response = await $api.delete('order/' + orderId);

      Logger.log('Successfully deleted order', response.data);
      return response.data;
    } catch (err) {
      const error = getError(err);
      Logger.error(error?.message);
      throw error;
    }
  }
}

export default new OrderService();
