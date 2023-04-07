import React, {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  memo,
  useEffect,
  useRef,
} from 'react';
import s from './Modal.module.scss';
import { useClickOutside } from 'hooks';
import { useHref } from 'react-router-dom';

interface IProps extends PropsWithChildren {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  className?: string;
  onModalClose?: () => void;
}

const Modal: FC<IProps> = ({
  isVisible,
  setIsVisible,
  children,
  className = '',
  onModalClose = () => {},
}) => {
  const ref = useRef(null);

  const onClose = () => {
    onModalClose();
    setIsVisible(false);
  };

  useClickOutside(ref, onClose, { if: isVisible, dependencies: [isVisible] });
  useEffect(() => {
    document.body.classList[isVisible ? 'add' : 'remove']('lock');
    !isVisible && onModalClose();
  }, [isVisible]);

  return (
    <div
      ref={ref}
      onClick={() => setIsVisible(false)}
      className={[s.modal, isVisible ? s.active : '', className].join(' ')}
    >
      <div onClick={(e) => e.stopPropagation()} className={s.content}>
        {children}
      </div>
    </div>
  );
};

export default memo(Modal);
