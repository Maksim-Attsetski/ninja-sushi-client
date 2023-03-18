import { assets } from 'assets';

export type TProductType =
  | 'sushi'
  | 'rolls'
  | 'set'
  | 'drinks'
  | 'appetizers'
  | 'sauces';

export interface IProductTypeArray {
  type: TProductType;
  text: string;
  icon?: typeof assets.sushiDefault;
}

export const productTypes: IProductTypeArray[] = [
  { type: 'sushi', text: 'Суши', icon: assets.sushiIcon },
  { type: 'rolls', text: 'Роллы', icon: assets.rollsIcon },
  { type: 'set', text: 'Сеты', icon: assets.setIcon },
  { type: 'drinks', text: 'Напитки', icon: assets.drinksIcon },
  { type: 'appetizers', text: 'Боулы', icon: assets.appetizersIcon },
  { type: 'sauces', text: 'Соусы', icon: assets.saucesIcon },
];

export const enum IStrengths {
  острый = '🌶️',
  вегетарианское = '☘️',
  'без глютена' = '🥛',
}

export interface IIngredient {
  _id: string;
  name: string;
  image: string;
  createdAt: number;
}

export interface IProduct<I = IIngredient> {
  _id: string;
  name: string;
  article: string;
  description: string;
  preview: string;
  strengths: (keyof IStrengths)[];
  consist: I[];
  weight: number;
  price: number;
  type: TProductType;
  createdAt: number;
}
