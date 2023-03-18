import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Gap } from 'UI';
import { ProfileSider } from 'widgets/User';

const ProfilePage: FC = () => {
  return (
    <div className='container'>
      <Gap y={15} />
      <div className='flex gap-5'>
        <ProfileSider />
        <Outlet />
      </div>
    </div>
  );
};
export default ProfilePage;
