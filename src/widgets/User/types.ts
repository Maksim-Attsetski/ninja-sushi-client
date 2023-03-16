import { IIngredient } from 'widgets/Product';

type TUserProviders = 'pass' | 'google';
export type TUserWithGeneric = IUser<string | IIngredient>;
export type TUser = TUserWithGeneric | null;

export interface ILogin {
  email: string;
  password: string;
}
export interface ISignup extends ILogin {
  name: string;
}

export interface IUser<T> extends ISignup {
  _id: string;
  createdAt: number;
  location: { latitude: number; longitude: number };
  favorite_products_ids: T[];
  phone: string;
  providers: TUserProviders[];
}
