import { IProduct } from 'widgets/Product';
import { $api, getError, IGetArray, IQuery, Logger } from 'shared';

class ProductService {
  async getAll(params: IQuery): Promise<IGetArray<IProduct>> {
    try {
      const data = await $api.get<IGetArray<IProduct>>('product', { params });

      Logger.log('Success get product list', data.data);
      return data.data;
    } catch (error) {
      const err = getError(error);
      Logger.error(err?.message);
      throw err;
    }
  }
  async edit(_id: string, product: IProduct): Promise<IProduct> {
    try {
      const data = await $api.patch('product/' + _id, product);

      Logger.log('Successfully edit product', data.data);
      return data.data;
    } catch (error) {
      const err = getError(error);
      Logger.error(err?.message);
      throw err;
    }
  }
}

export default new ProductService();
