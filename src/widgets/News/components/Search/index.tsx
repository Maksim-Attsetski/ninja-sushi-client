import React, { Dispatch, FC, memo, SetStateAction, useEffect } from 'react';

import { useDebounce } from 'hooks';
import { INews, useNews } from 'widgets/News';

import s from './Search.module.scss';
import { Input } from 'UI';
import { IQuery } from 'shared';
import { assets } from 'assets';

interface IProps {
  setSearchNews: Dispatch<SetStateAction<INews[]>>;
  containerClassName?: string;
}

const Search: FC<IProps> = ({ setSearchNews, containerClassName = '' }) => {
  const { value, setValue } = useDebounce('', onSearchNews, 500);
  const { onGetNews } = useNews();

  async function onSearchNews() {
    const query: IQuery = { search: 'title==' + value };

    const searchNews = await onGetNews(query, true);
    searchNews && setSearchNews(searchNews.data);
  }

  useEffect(() => {
    onSearchNews();
  }, []);

  return (
    <div className={[s.container, containerClassName].join(' ')}>
      <img src={assets.search} alt='search' className={s.icon} />
      <Input
        className={s.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
export default memo(Search);
