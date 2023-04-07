import { IIngredient } from 'widgets/Product';

type TUserProviders = 'pass' | 'google';
export type TUserWithGeneric = IUser<string | IIngredient>;
export type TUser = TUserWithGeneric | null;

export interface ILocation {
  city: string;
  country: string;
  street: string;
  home: string;
  entrance: number; // подъезд
  floor: number; // этаж
  flat: number; // кв
}

export interface ILogin {
  email: string;
  password: string;
}
export interface ISignup extends ILogin {
  name: string;
  location: ILocation[];
}

export interface IUser<T = string> extends ISignup {
  _id: string;
  createdAt: number;
  favorite_products_ids: T[];
  phone: string;
  providers: TUserProviders[];
}
