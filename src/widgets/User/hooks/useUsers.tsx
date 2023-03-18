import { useActions, useTypedSelector } from 'hooks';
import { IIngredient } from 'widgets/Product';
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

  const editUser = async (userData: TUserWithGeneric) => {
    if (!user?._id) return;

    try {
      const response = await userService.editUser(user?._id, userData);

      action.editUserAC({ ...userData, _id: user?._id });
    } catch (error) {
      throw error;
    }
  };

  const onLikeProduct = async (_id: string) => {
    if (!user?._id) return;

    try {
      const currentIds = (
        isString()
          ? user?.favorite_products_ids
          : (user as IUser<IIngredient>)?.favorite_products_ids.map(
              (el) => el?._id
            )
      ) as string[];

      const favorite_products_ids = currentIds?.includes(_id)
        ? currentIds.filter((id) => id !== _id)
        : [...currentIds, _id];

      const newUser = { favorite_products_ids } as TUserWithGeneric;
      await userService.editUser(user?._id, newUser);
      action.editUserAC(newUser);
    } catch (error) {
      throw error;
    }
  };

  return { onLikeProduct, editUser, getIds, user };
};

export default useUsers;
