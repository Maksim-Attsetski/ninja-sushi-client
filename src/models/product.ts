export interface IProduct<I = string> {
  name: string;
  article: string;
  description: string;
  preview: string;
  strengths: string[];
  consist: I[];
  weight: number;
  price: number;
  createdAt: number;
  _id: string;
}
