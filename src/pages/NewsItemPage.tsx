import React, { FC, memo } from 'react';

import { useParams } from 'react-router-dom';

import { NewsItemFull } from 'widgets/News';

const NewsItemPage: FC = () => {
  const { id } = useParams();

  return (
    <div className='container'>
      <div>{id ? <NewsItemFull id={id} /> : null}</div>
    </div>
  );
};
export default memo(NewsItemPage);
