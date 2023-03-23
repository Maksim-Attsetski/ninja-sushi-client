import { useActions, useTypedSelector } from 'hooks';
import { IQuery } from 'shared';
import { ICreateOrder, IOrder, OrderService } from '..';

const useOrder = () => {
  const { orders, history, totalPrice } = useTypedSelector(
    (state) => state.order
  );
  const { action } = useActions();

  const onGetOrderList = async (query?: IQuery, isHistory?: boolean) => {
    const response = await OrderService.getAll(query || {});

    isHistory ? action.setHistoryAC(response) : action.setOrdersAC(response);
  };

  const onAddOrder = async (newOrder: ICreateOrder, isHistory?: boolean) => {
    const response = await OrderService.create(newOrder);

    isHistory ? action.addHistoryAC(response) : action.addOrderAC(response);
  };

  const onEditOrder = async (
    _id: string,
    order: IOrder,
    isHistory?: boolean
  ) => {
    await OrderService.edit(_id, order);

    const newOrder = { ...order, _id };
    isHistory ? action.editHistoryAC(newOrder) : action.editOrderAC(newOrder);
  };

  const onDeleteOrder = async (_id: string, isHistory?: boolean) => {
    const response = await OrderService.delete(_id);

    isHistory
      ? action.deleteHistoryAC(response)
      : action.deleteOrderAC(response);
  };

  return {
    orders,
    history,
    totalPrice,
    onGetOrderList,
    onAddOrder,
    onEditOrder,
    onDeleteOrder,
  };
};

export default useOrder;
