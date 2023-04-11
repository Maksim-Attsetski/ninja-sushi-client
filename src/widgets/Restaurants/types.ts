import { ILocation } from 'widgets/User';

export interface IContact {
  phone?: string[];
  email?: string[];
  website?: string[];
}

interface IRestaurantBreak {
  from: string;
  to: string;
}

export interface IRestaurant {
  _id: string;
  location: ILocation;
  open_at: number;
  close_at: number;
  breaks: IRestaurantBreak[];
  contacts: IContact;
  rate: number;
}
