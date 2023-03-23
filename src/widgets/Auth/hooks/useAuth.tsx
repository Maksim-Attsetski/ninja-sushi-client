import { CredentialResponse } from '@react-oauth/google';
import { useActions, useTypedSelector } from 'hooks';
import { useNews } from 'widgets/News';
import { useOrder } from 'widgets/Order';
import { IIngredient, useProduct } from 'widgets/Product';
import { ILogin, ISignup, IUser } from 'widgets/User';
import { authService } from '..';

const useAuth = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  const { action } = useActions();
  const { onGetOrderList } = useOrder();

  const setAuth = (data: IUser<string | IIngredient> | null) => {
    console.log('data', data);

    action.setUserAC(data);
    action.setAuthAC(!!data);
  };

  const onSignup = async (signupDto: ISignup) => {
    try {
      const data = await authService.login(signupDto);
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

  const onAuthByGoogle = async (payload: CredentialResponse) => {
    if (!payload?.credential) return;

    try {
      const data = await authService.authByGoogle(payload?.credential);
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
      if (data?._id) {
        await onGetOrderList({
          filter: `authorId==${data?._id};status==not_paid`,
        });
      }
    } catch (error) {
      throw error;
    }
  };

  return { onLogin, onLogout, onRefresh, onSignup, onAuthByGoogle, isAuth };
};

export default useAuth;
