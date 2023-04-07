import { useTypedSelector } from 'hooks';
import { routeNames } from 'navigation/types';
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  memo,
  MouseEvent,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from 'react';
import { useNavigate } from 'react-router-dom';

import s from './Button.module.scss';

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string | ReactElement | ReactNode;
  auth?: boolean;
  colorType?: 'white' | 'secondary' | 'main' | 'outline-main' | 'outline-error';
  small?: boolean;
}
const Button: FC<IProps> = ({
  text,
  auth = false,
  colorType = 'main',
  onClick,
  className,
  small = false,
  ...props
}) => {
  const navigate = useNavigate();
  const { isAuth } = useTypedSelector((state) => state.auth);

  const onButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (auth && !isAuth) {
      navigate(routeNames.Auth);
      return;
    }
    onClick && onClick(event);
  };

  return (
    <button
      {...props}
      className={[s.button, s[colorType], small && s.small, className].join(
        ' '
      )}
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
};
export default memo(Button);
