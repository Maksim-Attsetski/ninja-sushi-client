import { motion, Variants } from 'framer-motion';
import { useClickOutside } from 'hooks';
import React, { FC, useRef, useState } from 'react';
import s from './Select.module.scss';

export interface IOptions {
  value: string;
  text: string;
}

interface IProps {
  options: IOptions[];
  value: string;
  setValue(value: string): void;
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export const Select: FC<IProps> = ({ options, value, setValue }) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>(value);

  const onClose = () => {
    setIsOpen(false);
  };

  const onClickItem = (newEl: IOptions) => {
    setValue(newEl.value);
    setActiveItem(newEl.text);
    onClose();
  };

  useClickOutside(ref, onClose);

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className={s.menu}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {activeItem}
        <motion.div
          variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width='15' height='15' viewBox='0 0 20 20'>
            <path d='M0 7 L 20 7 L 10 16' />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: 'inset(0% 0% 0% 0% round 10px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: 'inset(10% 50% 90% 50% round 10px)',
            transition: { type: 'spring', bounce: 0, duration: 0.3 },
          },
        }}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        {options.map((el) => (
          <motion.li
            onClick={() => onClickItem(el)}
            variants={itemVariants}
            key={el.value}
          >
            {el.text}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};
