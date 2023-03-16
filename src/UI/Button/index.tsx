import { routeNames } from 'navigation/types';
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  memo,
  MouseEvent,
  MouseEventHandler,
} from 'react';
import { useNavigate } from 'react-router-dom';

import s from './Button.module.scss';

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  auth?: boolean;
}
const Button: FC<IProps> = ({
  text,
  auth = false,
  onClick,
  className,
  ...props
}) => {
  const navigate = useNavigate();

  const onButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (onClick) {
      auth ? navigate(routeNames.Auth) : onClick(event);
    }
  };
  return (
    <button
      {...props}
      className={[s.button, className].join(' ')}
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
};
export default memo(Button);
