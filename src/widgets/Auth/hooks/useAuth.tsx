import { useActions, useTypedSelector } from 'hooks';
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
      console.log(error);
      throw error;
    }
  };

  const onLogin = async (signupDto: ISignup) => {
    try {
      const data = await authService.login(signupDto);
      action.setAuth(data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const onLogout = async (signupDto: ISignup) => {
    try {
      const isSuccess = await authService.login(signupDto);
      isSuccess && action.setAuth(null);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const onRefresh = async (signupDto: ISignup) => {
    try {
      const data = await authService.login(signupDto);
      action.setAuth(data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return { onLogin, onLogout, onRefresh, onSignup, user, isAuth };
};

export default useAuth;
