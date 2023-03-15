export type TProductType = 'sushi' | 'rolls' | 'set';

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
  strengths: string[];
  consist: I[];
  weight: number;
  price: number;
  type: TProductType;
  createdAt: number;
}
