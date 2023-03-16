import { useActions, useTypedSelector } from 'hooks';
import { getError, Logger } from 'shared';
import { IIngredient } from 'widgets/Product';
import { ILogin, ISignup, IUser } from 'widgets/User';
import { authService } from '..';

const useAuth = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  const { action } = useActions();

  const setAuth = (data: IUser<string | IIngredient> | boolean) => {
    action.setUserAC(typeof data === 'boolean' ? null : data);
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

  const onLogout = async () => {
    try {
      const isSuccess = await authService.logout();
      isSuccess && setAuth(false);
    } catch (error) {
      throw error;
    }
  };

  const onRefresh = async () => {
    try {
      const data = await authService.refresh();
      setAuth(data);
    } catch (error) {
      throw error;
    }
  };

  return { onLogin, onLogout, onRefresh, onSignup, isAuth };
};

export default useAuth;
