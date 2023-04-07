import { ILocation } from 'widgets/User';

export interface IUserGeoResponse {
  main: string;
  sub: string;
}

export const getUserGeo = (location: ILocation): IUserGeoResponse => {
  const { flat, street, home, city, entrance, floor } = location;

  return {
    main: `${city}, ${street}, ${home}`,
    sub: `Подъезд ${entrance}, этаж ${floor}, квартира ${flat}`,
  };
};
