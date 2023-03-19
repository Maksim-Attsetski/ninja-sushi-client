import React, { FC, memo, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { routeNames } from 'navigation/types';

import { dateHelper, getPhoto } from 'shared';
import { Title } from 'UI';
import { INews } from 'widgets/News';

import s from './NewsItem.module.scss';

interface IProps {
  news: INews;
}

const NewsItem: FC<IProps> = ({ news }) => {
  const navigate = useNavigate();

  const beautifulDate = useMemo(
    () => dateHelper.getTimeString(news.createdAt, 'ru'),
    [news.createdAt]
  );

  const onOpenNews = () => {
    navigate(routeNames.News + '/' + news._id);
  };

  const photo = useMemo(() => getPhoto(news?.preview), [news?.preview]);

  return (
    <div className={s.news}>
      <img className={s.img} src={photo} alt={news.title} />
      <div className={s.content}>
        <div className={s.infoBlock}>
          <div className={s.infoBlockTag}>{news.tag[0]}</div>
          <div className={s.infoBlockDate}>{beautifulDate}</div>
        </div>
        <Title text={news.title} className={s.title} />
        <div className={s.moreBtn} onClick={onOpenNews}>
          Подробнее
        </div>
      </div>
    </div>
  );
};
export default memo(NewsItem);
