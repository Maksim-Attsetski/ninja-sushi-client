import React, { FC, memo, useMemo } from 'react';
import { useUsers } from 'widgets/User';
import s from './UserDelivery.module.scss';

const UserDelivery: FC = () => {
  const { user } = useUsers();
  console.log(user);

  return (
    <div>
      <div>UserDelivery</div>
      <div>
        {user?.location.map((geo, inx) => {
          const { flat, street, home, city, country } = geo;

          return (
            <div key={inx}>
              <div>
                {street}, д. {home}, кв. {flat}
              </div>
              <div>
                {country}, {city}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default memo(UserDelivery);
