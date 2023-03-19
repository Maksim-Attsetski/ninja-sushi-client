import { bindActionCreators } from 'redux';

import { useTypedDispatch } from './redux';
import { actions as productActions } from 'widgets/Product';
import { actions as authActions } from 'widgets/Auth';
import { actions as userActions } from 'widgets/User';
import { actions as orderActions } from 'widgets/Order';
import { actions as newsActions } from 'widgets/News';

const useActions = () => {
  const dispatch = useTypedDispatch();

  const allActions = {
    ...productActions,
    ...authActions,
    ...userActions,
    ...newsActions,
    ...orderActions,
  };

  const action = bindActionCreators(allActions, dispatch);

  return { action };
};

export default useActions;
