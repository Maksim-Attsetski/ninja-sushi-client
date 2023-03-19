import { assets } from 'assets';
import { SERVER_URL } from 'shared/config';

export const getPhoto = (img?: string) => {
  return img ? SERVER_URL + img : assets.noPhoto;
};
