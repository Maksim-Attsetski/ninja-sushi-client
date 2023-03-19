import { usePagination } from 'hooks';
import React, { FC, memo, useEffect } from 'react';
import { IQuery } from 'shared';
import dateHelper from 'shared/helpers/dateHelper';
import { List } from 'UI';
import { INews, useNews } from 'widgets/News';
import NewsItem from '../NewsItem';
import s from './NewsList.module.scss';

interface IProps {
  query?: IQuery;
}

const NewsList: FC<IProps> = ({ query = {} }) => {
  const { onGetNews, news } = useNews();

  useEffect(() => {
    onGetNews(query);
  });

  return (
    <div>
      <List
        data={news}
        renderItem={(el) => <NewsItem news={el} />}
        containerClassname={s.list}
        itemClassname={s.item}
        emptyElement={
          <>
            <div className={s.empty}>
              К сожалению, сейчас нет новых новостей :{'('}
            </div>
          </>
        }
      />
    </div>
  );
};
export default memo(NewsList);
