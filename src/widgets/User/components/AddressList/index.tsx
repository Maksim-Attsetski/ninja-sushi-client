import React, { Dispatch, FC, SetStateAction, memo } from 'react';
import { IUser, useUsers } from 'widgets/User';

import s from './AddressList.module.scss';
import { IUserGeoResponse, getUserGeo } from 'shared';

interface IProps {
  activeAddress?: string;
  setActiveAddress?: Dispatch<SetStateAction<string>>;
}

const AddressList: FC<IProps> = ({
  activeAddress = '',
  setActiveAddress = () => {},
}) => {
  const { editUser, user } = useUsers();

  const onClickCircle = (geoInfo: IUserGeoResponse) => {
    setActiveAddress(geoInfo.main + '@' + geoInfo.sub);
  };

  const onClickDeleteAddress = async (index: number) => {
    const filteredAddresses = (user?.location || []).filter(
      (_, inx) => inx !== index
    );

    await editUser({ location: filteredAddresses } as IUser);
  };

  return (
    <div className={s.locations}>
      {user?.location.map((geo, inx) => {
        const geoInfo = getUserGeo(geo);
        const active =
          activeAddress.includes(geoInfo.main) &&
          activeAddress.includes(geoInfo.sub);

        return (
          <div key={inx} className={s.geo}>
            <div className={s.geoInfo}>
              <div className={s.geoInfoTitle}>{geoInfo.main}</div>
              <div className={s.geoInfoText}> {geoInfo.sub}</div>
            </div>
            <div className={s.geoButtons}>
              <div
                onClick={() => onClickDeleteAddress(inx)}
                className={s.geoButtonsDelete}
              >
                🗑️
              </div>
              {!!activeAddress.length && (
                <div
                  onClick={() => onClickCircle(geoInfo)}
                  className={s.geoButtonsCircle + ' ' + active ? s.active : ''}
                >
                  <span></span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(AddressList);
