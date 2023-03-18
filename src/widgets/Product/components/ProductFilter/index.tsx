import React, {
  Dispatch,
  FC,
  memo,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { IQuery } from 'shared';
import { IOptions, Select } from 'UI';
import {
  IProduct,
  IProductTypeArray,
  IStrengths,
  useProduct,
} from 'widgets/Product';

import s from './ProductFilter.module.scss';

interface IProps {
  productType: IProductTypeArray;
  setFilteredProducts: Dispatch<SetStateAction<IProduct[]>>;
}

const enum sortOptionsText {
  price_desc = 'От дорогих к дешевым',
  price_asc = 'От дешевых к дорогим',
  weight_desc = 'От тяжёлых к лёгким',
  weight_asc = 'От лёгких к тяжёлым',
}

const selectOptions: IOptions[] = [
  { value: 'price_desc', text: sortOptionsText.price_desc },
  { value: 'price_asc', text: sortOptionsText.price_asc },
  { value: 'weight_desc', text: sortOptionsText.weight_desc },
  { value: 'weight_asc', text: sortOptionsText.weight_asc },
];

interface IStrengthsFilter {
  icon: IStrengths;
  text: string;
}

const strengthsFilter: IStrengthsFilter[] = [
  { icon: IStrengths['без глютена'], text: 'без глютена' },
  { icon: IStrengths['вегетарианское'], text: 'вегетарианское' },
  { icon: IStrengths['острый'], text: 'острый' },
];

interface ISortOptions {
  field: keyof IProduct;
  by: 'asc' | 'desc';
  text: sortOptionsText;
}

const ProductFilter: FC<IProps> = ({ productType, setFilteredProducts }) => {
  const { getProducts } = useProduct();
  const [sortOptions, setSortOptions] = useState<ISortOptions>({
    field: 'price',
    by: 'desc',
    text: sortOptionsText.price_desc,
  });

  const [activeStrengths, setActiveStrengths] = useState<string[]>([]);

  const onGetCurProducts = async () => {
    const query: IQuery = {
      filter: `type==${productType.type};${
        activeStrengths.length > 0
          ? 'strengths_contains_' + activeStrengths
          : ''
      }`,
      sort: sortOptions.field + '==' + sortOptions.by,
      dependencies: true,
    };
    const products = await getProducts(query, true);

    products && setFilteredProducts(products);
  };

  const onChangeSortOption = (newValue: sortOptionsText) => {
    const splittedValue = newValue.split('_');
    const newOption = {
      field: splittedValue[0],
      // @ts-ignore
      text: sortOptionsText[newValue] || '',
      by: splittedValue[1],
    } as ISortOptions;

    setSortOptions(newOption);
  };

  const onChangeActiveStrengths = (newValue: string) => {
    const isExist = activeStrengths.includes(newValue);

    isExist
      ? setActiveStrengths((prev) => prev.filter((el) => el !== newValue))
      : setActiveStrengths((prev) => [...prev, newValue]);
  };

  useEffect(() => {
    onGetCurProducts();
  }, [productType, sortOptions, activeStrengths]);

  return (
    <div>
      <div className={s.strengths}>
        {strengthsFilter.map(({ icon, text }) => {
          const isActive = activeStrengths.includes(text);
          return (
            <div key={text} onClick={() => onChangeActiveStrengths(text)}>
              <div
                className={[s.strengthsItem, isActive && s.active].join(' ')}
              >
                {icon} {text}
              </div>
            </div>
          );
        })}
      </div>
      <Select
        options={selectOptions}
        value={sortOptions.text}
        setValue={onChangeSortOption}
      />
    </div>
  );
};
export default memo(ProductFilter);
