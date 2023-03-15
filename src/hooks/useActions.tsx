import { bindActionCreators } from 'redux';

import { useTypedDispatch } from './redux';
import { actions as productActions } from 'widgets/Product';

const useActions = () => {
  const dispatch = useTypedDispatch();

  const allActions = { ...productActions };

  const action = bindActionCreators(allActions, dispatch);

  return { action };
};

export default useActions;
