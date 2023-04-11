import React, { Dispatch, FC, SetStateAction, memo, useMemo } from 'react';

import { IOptions, List, Select } from 'UI';
import { getUserGeo } from 'shared';
import { useRestaurants, IRestaurant } from 'widgets/Restaurants';

import s from './RestaurantsSelect.module.scss';

interface IProps {
  activeAddress: string;
  setActiveAddress: Dispatch<SetStateAction<string>>;
}

const RestaurantsSelect: FC<IProps> = ({ activeAddress, setActiveAddress }) => {
  const { restaurants } = useRestaurants();

  const restaurantsOptions: IOptions[] = useMemo(
    () =>
      restaurants.map((el) => {
        const geo = getUserGeo(el.location);
        return { text: geo.main, value: geo.main + '@' + geo.sub };
      }),
    [restaurants]
  );

  return (
    <div>
      <Select
        options={restaurantsOptions}
        setValue={setActiveAddress}
        value={activeAddress}
      />
    </div>
  );
};

export default memo(RestaurantsSelect);
