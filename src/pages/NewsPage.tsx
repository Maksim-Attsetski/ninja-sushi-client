import React, { FC, memo, useState } from 'react';
import { Search, NewsList, INews } from 'widgets/News';

const NewsPage: FC = () => {
  const [searchNews, setSearchNews] = useState<INews[]>([]);

  return (
    <div className='container'>
      <Search setSearchNews={setSearchNews} />

      <NewsList searchNews={searchNews} />
    </div>
  );
};
export default memo(NewsPage);
