import React, { FC, memo } from 'react';
import { NewsList } from 'widgets/News';

const NewsPage: FC = () => {
  return (
    <div className='container'>
      <div>NewsPage</div>

      <NewsList />
    </div>
  );
};
export default memo(NewsPage);
