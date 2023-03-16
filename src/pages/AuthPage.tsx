import React, { FC, memo } from 'react';
import { AuthForm } from 'widgets/Auth';

const AuthPage: FC = () => {
  return (
    <div>
      <AuthForm />
    </div>
  );
};
export default memo(AuthPage);
