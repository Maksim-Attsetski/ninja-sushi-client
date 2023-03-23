import React, { FC, memo } from 'react';

import {
  AnimatePresence,
  AnimationProps,
  motion,
  Variant,
} from 'framer-motion';
import { useMessage } from 'widgets/Message';

import s from './FloatMessage.module.scss';

const initial: AnimationProps['initial'] = {
  left: '-150%',
};

const animate: Variant = {
  left: '5%',
};

const FloatMessage: FC = () => {
  const { enable, type, text } = useMessage();

  return (
    <AnimatePresence>
      {enable && (
        <motion.div
          initial={initial}
          animate={animate}
          exit={initial}
          transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
          className={[s.container, enable && s.active, s[type]].join(' ')}
        >
          <div>{text}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default memo(FloatMessage);
