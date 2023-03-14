export interface IUser<P = string> {
  name: string;
  email: string;
  phone?: string;
  avatar: string;
  location: { latitude: number; longitude: number } | null;
  order: P[];
  favorite_sushi_ids: P[];
  createdAt: number;
  providers: ['pass' | 'google'];
}
