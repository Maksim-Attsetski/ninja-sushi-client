import React, {
  Dispatch,
  FC,
  memo,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

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

const all = 'Все';

const Search: FC<IProps> = ({ setSearchNews, containerClassName = '' }) => {
  const { value, setValue } = useDebounce('', onSearchNews, 500);
  const { onGetNews } = useNews();

  const [allTags, setAllTags] = useState<string[]>([]);
  const [activeTags, setActiveTags] = useState<string>(all);

  async function onSearchNews() {
    console.log(activeTags);

    const query: IQuery = {
      search: 'title==' + value,
      filter: activeTags === all ? '' : `tag_contains_${activeTags}`,
    };

    const searchNews = await onGetNews(query, true);
    if (searchNews) {
      setSearchNews(searchNews.data);
      if (activeTags === all) {
        const tags = searchNews.data.map((el) => el.tag).flat(1);
        setAllTags(Array.from(new Set([all, ...tags])));
      }
    }
  }

  useEffect(() => {
    onSearchNews();
  }, [activeTags]);

  return (
    <div className={s.container}>
      <div className={s.tags}>
        {allTags.map((el) => (
          <div
            className={[s.tagsItem, el === activeTags && s.active].join(' ')}
            onClick={() => setActiveTags(el)}
            key={el}
          >
            {el}
          </div>
        ))}
      </div>
      <div className={[s.searchContainer, containerClassName].join(' ')}>
        <img src={assets.search} alt='search' className={s.icon} />
        <Input
          placeholder='Введите название новости...'
          className={s.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};
export default memo(Search);
