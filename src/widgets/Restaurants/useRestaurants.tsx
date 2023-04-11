import { useActions, useTypedSelector } from 'hooks';
import { IQuery } from 'shared';
import { restaurantService } from './service';

export const useRestaurants = () => {
  const { count, last, restaurants } = useTypedSelector(
    (state) => state.restaurant
  );
  const { action } = useActions();

  const onGetRestourants = async (query: IQuery = {}) => {
    const response = await restaurantService.get(query);

    action.setRestaurantsAC(response);
  };

  return { count, last, restaurants, onGetRestourants };
};
