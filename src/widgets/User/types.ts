
interface ILogin {
  email: string;
  password: string;
}

interface ISignup extends ILogin {
  name: string;
}

export interface IUser<T> extends ISignup {
  _id: string;
  createdAt: number;
  location: { latitude: number; longitude: number };
  favorite_sushi_ids: T[];
  phone: string;
  order: T[];
}