import { IProduct } from 'widgets/Product';
import { $api, IQuery } from 'shared';

class ProductService {
  async getAll(params: IQuery): Promise<IProduct[]> {
    const data = await $api.get('product', { params });

    return data.data;
  }
}

export default new ProductService();
