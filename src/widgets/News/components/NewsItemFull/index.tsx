import React, { FC, memo, useMemo } from 'react';

import { dateHelper, getPhoto } from 'shared';
import { Title } from 'UI';
import { useNews } from 'widgets/News';

import s from './NewsItemFull.module.scss';

interface IProps {
  id: string;
}

const NewsItemFull: FC<IProps> = ({ id }) => {
  const { news } = useNews();

  const curNews = useMemo(() => news.find((el) => el._id === id), [news, id]);
  const photo = useMemo(() => getPhoto(curNews?.preview), [curNews?.preview]);

  const beautifulDate = useMemo(
    () => (curNews ? dateHelper.getTimeString(curNews?.createdAt, 'ru') : ''),
    [curNews?.createdAt]
  );

  return curNews ? (
    <div className={s.news}>
      <Title text={curNews.title} className={s.title} />
      <div className={s.tags}>
        {curNews.tag.map((el: string) => (
          <div className={s.tagsItem} key={el}>
            {el}
          </div>
        ))}
        <div className={s.date}>{beautifulDate}</div>
      </div>
      <img className={s.img} src={photo} alt={curNews.title} />
    </div>
  ) : (
    <div>
      <div>Такой новости не существует</div>
    </div>
  );
};
export default memo(NewsItemFull);
