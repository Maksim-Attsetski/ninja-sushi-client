import { useActions, useTypedSelector } from 'hooks';
import { IQuery } from 'shared';
import { ICreateOrder, IOrder, OrderService } from '..';

const useOrder = () => {
  const { order, history, totalPrice } = useTypedSelector(
    (state) => state.order
  );
  const { action } = useActions();

  const onGetOrderList = async (query?: IQuery, isHistory?: boolean) => {
    const response = await OrderService.getAll(query || {});

    isHistory
      ? action.setHistoryAC(response)
      : action.setOrdersAC(response.data[0] || null);
  };

  const onAddOrder = async (newOrder: ICreateOrder) => {
    const response = await OrderService.create(newOrder);

    action.addHistoryAC(response);
  };

  const onEditOrder = async (
    _id: string,
    order: IOrder,
    isHistory?: boolean
  ) => {
    await OrderService.edit(_id, order);

    const newOrder = { ...order, _id };
    isHistory ? action.editHistoryAC(newOrder) : action.setOrdersAC(newOrder);
  };

  const onDeleteOrder = async (_id: string, isHistory?: boolean) => {
    const response = await OrderService.delete(_id);

    isHistory ? action.deleteHistoryAC(response) : action.setOrdersAC(null);
  };

  return {
    order,
    history,
    totalPrice,
    onGetOrderList,
    onAddOrder,
    onEditOrder,
    onDeleteOrder,
  };
};

export default useOrder;
