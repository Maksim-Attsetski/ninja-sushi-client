import { delay } from 'framer-motion';
import { useActions, useTypedSelector } from 'hooks';
import { useCallback, useEffect, useRef, useState } from 'react';

const useMessage = (time?: number) => {
  const { action } = useActions();
  const { enable, type, text } = useTypedSelector((state) => state.msg);
  const timer = useRef(null);

  const onDisableMsg = () => {
    action.setMessageAC({ enable: false, text: '' });
  };

  const onSuccessMsg = useCallback((text?: string) => {
    action.setMessageAC({ enable: true, type: 'success', text });
  }, []);

  const onErrorMsg = useCallback(
    () => (text?: string) => {
      action.setMessageAC({ enable: true, type: 'error', text });
    },
    []
  );

  useEffect(() => {
    if (enable) {
      const timer = setTimeout(onDisableMsg, time ?? 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [enable, time]);

  return {
    enable,
    type,
    text,
    onDisableMsg,
    onSuccessMsg,
    onErrorMsg,
  };
};
export default useMessage;
