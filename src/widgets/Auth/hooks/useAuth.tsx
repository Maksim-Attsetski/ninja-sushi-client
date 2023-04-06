import { CredentialResponse } from '@react-oauth/google';
import { useActions, useTypedSelector } from 'hooks';
import { useOrder } from 'widgets/Order';
import { IIngredient } from 'widgets/Product';
import { ILogin, ISignup, IUser } from 'widgets/User';
import { authService } from '..';

const useAuth = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  const { location } = useTypedSelector((state) => state.app);
  const { action } = useActions();
  const { onGetOrderList } = useOrder();

  const setAuth = (data: IUser<string | IIngredient> | null) => {
    action.setUserAC(data);
    action.setAuthAC(!!data);
  };

  const onSignup = async (signupDto: ISignup) => {
    try {
      const data = await authService.signup({ ...signupDto, location });
      await onGetUserOrder(data);

      setAuth(data);
    } catch (error) {
      throw error;
    }
  };

  const onLogin = async (loginDto: ILogin) => {
    try {
      const data = await authService.login(loginDto);
      setAuth(data);
    } catch (error) {
      throw error;
    }
  };

  const onAuthByGoogle = async ({ credential }: CredentialResponse) => {
    if (!credential) return;

    try {
      const newUser = { credential, location };
      const data = await authService.authByGoogle(newUser);
      await onGetUserOrder(data);

      setAuth(data);
    } catch (error) {
      throw error;
    }
  };

  const onLogout = async () => {
    try {
      const isSuccess = await authService.logout();

      isSuccess && setAuth(null);
    } catch (error) {
      throw error;
    }
  };

  const onRefresh = async () => {
    try {
      const data = await authService.refresh();

      setAuth(data);
      await onGetUserOrder(data);
    } catch (error) {
      throw error;
    }
  };

  const onGetUserOrder = async (data: IUser<string>) => {
    if (data?._id) {
      await onGetOrderList({
        filter: `authorId==${data?._id};status==not_paid`,
      });
    }
  };

  return { onLogin, onLogout, onRefresh, onSignup, onAuthByGoogle, isAuth };
};

export default useAuth;
