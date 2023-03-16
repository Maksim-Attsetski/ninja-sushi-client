import { useActions, useTypedSelector } from 'hooks';
import { getError, Logger } from 'shared';
import { ISignup } from 'widgets/User';
import { authService } from '..';

const useAuth = () => {
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { action } = useActions();

  const onSignup = async (signupDto: ISignup) => {
    try {
      const data = await authService.login(signupDto);
      action.setAuth(data);
    } catch (error) {
      throw error;
    }
  };

  const onLogin = async (signupDto: ISignup) => {
    try {
      const data = await authService.login(signupDto);
      action.setAuth(data);
    } catch (error) {
      throw error;
    }
  };

  const onLogout = async () => {
    try {
      const isSuccess = await authService.logout();
      isSuccess && action.setAuth(null);
    } catch (error) {
      throw error;
    }
  };

  const onRefresh = async () => {
    try {
      const data = await authService.refresh();
      action.setAuth(data);
    } catch (error) {
      throw error;
    }
  };

  return { onLogin, onLogout, onRefresh, onSignup, user, isAuth };
};

export default useAuth;
