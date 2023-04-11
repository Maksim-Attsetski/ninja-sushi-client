import { IProduct } from 'widgets/Product';

export type TPaymentsType = 'cash' | 'card' | 'card courier' | 'cash courier';
export type TOrderStatus = 'not_paid' | 'paid';
export type TOrder = IOrder | null;

export interface IDelivery {
  delivery: boolean;
  time: number;
  address: string;
}

export interface ICreateOrder<P = IProduct | string, U = string> {
  price: number;
  discount?: number;
  tips?: number; // чаевые
  delivery: IDelivery;
  deliveryTime: number;
  paymentsType: TPaymentsType;
  status: TOrderStatus;
  comment: string;
  products: { product: P; count: number; _id?: string }[];
  authorId: U;
}

export interface IOrder extends ICreateOrder {
  _id: string;
  createdAt: number;
  archivedAt?: number;
}

export type TGooglePayRes = google.payments.api.PaymentData;
