import React, { FC, memo } from 'react';
import dateHelper from 'shared/helpers/dateHelper';
import { Title } from 'UI';
import { INews } from 'widgets/News';
import s from './NewsItem.module.scss';

interface IProps {
  news: INews;
}

const NewsItem: FC<IProps> = ({ news }) => {
  return (
    <div>
      <Title text={news.title} />
      <div>{news.description}</div>
      {dateHelper.getTimeString(news.createdAt)}
    </div>
  );
};
export default memo(NewsItem);
