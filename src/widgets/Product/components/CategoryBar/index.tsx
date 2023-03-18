import { routeNames } from 'navigation/types';
import React, { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { productTypes } from 'widgets/Product';

import s from './CategoryBar.module.scss';

const CategoryBar: FC = () => {
  const navigate = useNavigate();

  const onOpenCategory = (type: string) => {
    navigate(routeNames.Category + '/' + type);
  };

  return (
    <div className={s.container}>
      <div className={s.list}>
        {productTypes.map((el) => (
          <div
            key={el.type}
            onClick={() => onOpenCategory(el.type)}
            className={s.category}
          >
            <div className={s.categoryIconContainer}>
              <img className={s.categoryIcon} src={el.icon} alt={el.text} />
            </div>
            <div className={s.categoryText}>{el.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default memo(CategoryBar);
