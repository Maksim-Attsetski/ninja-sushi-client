import { bindActionCreators } from 'redux';

import { useTypedDispatch } from './redux';
import { actions as productActions } from 'widgets/Product';
import { actions as authActions } from 'widgets/Auth';

const useActions = () => {
  const dispatch = useTypedDispatch();

  const allActions = { ...productActions, ...authActions };

  const action = bindActionCreators(allActions, dispatch);

  return { action };
};

export default useActions;
