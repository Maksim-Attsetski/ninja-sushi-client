import React, { FC, memo } from 'react';

import { IRestaurant, useRestaurants } from 'widgets/Restaurants';

import s from './RestaurantsList.module.scss';
import { List } from 'UI';
import { getUserGeo } from 'shared';

const RestaurantsList: FC = () => {
  const { restaurants } = useRestaurants();

  return (
    <div>
      <List
        data={restaurants}
        renderItem={(item: IRestaurant) => (
          <div>
            <div className={s.address}>{getUserGeo(item.location)?.main}</div>
            <div>
              c {item.open_at} до {item.close_at}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default memo(RestaurantsList);
