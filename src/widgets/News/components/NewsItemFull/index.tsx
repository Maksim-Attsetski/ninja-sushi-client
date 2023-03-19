import { assets } from 'assets';
import { routeNames } from 'navigation/types';
import React, { FC, memo, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import dateHelper from 'shared/helpers/dateHelper';
import { SubTitle, Title } from 'UI';
import { INews, useNews } from 'widgets/News';
import s from './NewsItemFull.module.scss';

interface IProps {
  id: string;
}

const NewsItemFull: FC<IProps> = ({ id }) => {
  const { news } = useNews();

  const curNews = useMemo(() => news.find((el) => el._id === id), [news, id]);

  const navigate = useNavigate();

  const beautifulDate = useMemo(
    () => (curNews ? dateHelper.getTimeString(curNews?.createdAt, 'ru') : ''),
    [curNews?.createdAt]
  );

  const onOpenNews = () => {
    navigate(routeNames.News + '/' + curNews?._id);
  };

  return curNews ? (
    <div className={s.news}>
      <Title text={curNews.title} className={s.title} />
      <div className={s.tags}>
        {curNews.tag.map((el) => (
          <div className={s.tagsItem} key={el}>
            {el}
          </div>
        ))}
        <div className={s.date}>{beautifulDate}</div>
      </div>
      <img
        className={s.img}
        src={curNews.preview || assets.noPhoto}
        alt={curNews.title}
      />
    </div>
  ) : (
    <div>
      <div>Такой новости не существует</div>
    </div>
  );
};
export default memo(NewsItemFull);
