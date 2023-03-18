import { useActions, useTypedSelector } from 'hooks';
import { IIngredient, IProduct } from 'widgets/Product';
import { userService } from '..';
import { IUser, TUserWithGeneric } from '../types';

const useUsers = () => {
  const { user } = useTypedSelector((state) => state.user);
  const { action } = useActions();

  const isString = () => typeof user?.favorite_products_ids[0] === 'string';

  const getIds = (): string[] =>
    (isString()
      ? user?.favorite_products_ids
      : (user as IUser<IIngredient>)?.favorite_products_ids.map(
          (el) => el?._id
        )) as string[];

  const getUser = async (isFull?: boolean) => {
    if (!user?._id) return;

    try {
      const data = await userService.get(user?._id, isFull);
      action.setUserAC(data);
    } catch (error) {
      throw error;
    }
  };

  const editUser = async (userData: TUserWithGeneric) => {
    if (!user?._id) return;

    try {
      await userService.editUser(user?._id, userData);

      action.editUserAC({ ...userData, _id: user?._id });
    } catch (error) {
      throw error;
    }
  };

  const onLikeProduct = async (_id: string) => {
    if (!user?._id) return;

    try {
      const isStringIds = isString();
      const currentIds = getIds();

      const favorite_products_ids = currentIds?.includes(_id) // check is liked
        ? currentIds.filter((id) => id !== _id) // if liked — remove like
        : [...currentIds, _id]; // if not liked — like

      const newUser = { favorite_products_ids } as TUserWithGeneric;
      await userService.editUser(user?._id, newUser); // send request to edit user

      action.editUserAC(newUser);

      if (!isStringIds) {
        await getUser(true); // refresh user if favorite products is string[]
      }
    } catch (error) {
      throw error;
    }
  };

  return { onLikeProduct, editUser, getUser, getIds, user };
};

export default useUsers;
