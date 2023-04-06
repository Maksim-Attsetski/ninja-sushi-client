import { Gap } from 'UI';
import React, { FC, memo, useState } from 'react';
import { Search, NewsList, INews } from 'widgets/News';

const NewsPage: FC = () => {
  const [searchNews, setSearchNews] = useState<INews[]>([]);

  return (
    <div className='container'>
      <Gap y={15} />
      <Search setSearchNews={setSearchNews} />
      <Gap y={15} />

      <NewsList searchNews={searchNews} />
    </div>
  );
};
export default memo(NewsPage);
