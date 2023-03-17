import { useActions, useTypedSelector } from 'hooks';
import { IQuery } from 'shared';
import { ICreateOrder, IOrder, OrderService } from '..';

const useOrder = () => {
  const { orders } = useTypedSelector((state) => state.order);
  const { action } = useActions();

  const onGetOrderList = async (query?: IQuery) => {
    const response = await OrderService.getAll(query || {});

    action.setOrdersAC(response);
  };

  const onAddOrder = async (newOrder: ICreateOrder) => {
    const response = await OrderService.create(newOrder);

    action.addOrderAC(response);
  };

  const onEditOrder = async (_id: string, order: IOrder) => {
    await OrderService.edit(_id, order);

    action.editOrderAC({ ...order, _id });
  };

  const onDeleteOrder = async (_id: string) => {
    const response = await OrderService.delete(_id);

    action.deleteOrderAC(response);
  };

  return { orders, onGetOrderList, onAddOrder, onEditOrder, onDeleteOrder };
};

export default useOrder;
