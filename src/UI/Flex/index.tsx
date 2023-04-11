import React, { FC, memo, PropsWithChildren } from 'react';
import s from './Flex.module.scss';

type flexDir = 'flex-start' | 'flex-end' | 'center' | 'stretch';

interface IProps extends PropsWithChildren {
  justify?: flexDir | 'space-between';
  align?: flexDir;
  gap?: string;
  className?: string;
  col?: boolean;
  full?: boolean;
}

const Flex: FC<IProps> = ({
  align = 'stretch',
  children,
  gap = '10px 10px',
  justify = 'stretch',
  col = false,
  full = false,
  className = '',
}) => {
  return (
    <div
      className={[s.container, className].join(' ')}
      style={{
        justifyContent: justify,
        alignItems: align,
        gap,
        flexDirection: col ? 'column' : 'row',
        width: full ? '100%' : 'max-content',
      }}
    >
      {children}
    </div>
  );
};

export default memo(Flex);
