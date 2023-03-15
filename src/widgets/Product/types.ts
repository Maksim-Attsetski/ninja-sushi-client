export type TProductType = 'sushi' | 'rolls' | 'set' | 'drinks';

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
